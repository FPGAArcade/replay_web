import * as Consts from "src/constants.ts"

export interface Platform { 
    id: string;
    name: string;
    imageurl: string;
}

export type ReleaseTrain = "devel" | "stable" | "testing";
export type BuildType = "core";

// TODO: [Gary] Rename Build to CoreBuild and setup base Build
export interface Build {
  buildDate: EpochTimeStamp;
  buildType: BuildType;
  coreId: string;
  downloadURL: string;
  id: string;
  platformId: string;
  releaseDate: Record<ReleaseTrain, EpochTimeStamp>;
  releaseTrain: Array<ReleaseTrain>;
  s3key: string;
}

const sortByBuildDate = (arr: Array<Build>) => {
  return arr.sort(function (a, b) {
    return new Date(b.buildDate).getTime() - new Date(a.buildDate).getTime();
  });
};

const getUniqBy = (arr: Array<Build>, prop: keyof Build) => {
  const set = new Set();

  return arr.filter((o) => {
    if (!set.has(o[prop])) {
      let stable = arr.find((c) => {
        if (o[prop] == c.coreId && c.releaseTrain.includes("stable")) {
          return true;
        }
        return false;
      });
      if (stable && o == stable) {
        set.add(o[prop]);
        return true;
      }
      if (!stable) {
        set.add(o[prop]);
        return true;
      }
      return false;
    }
  });
};

const sortByCoreName = (arr: Array<any>) => {
  return arr.sort(function (a, b) {
    return a.coreId.localeCompare(b.coreId);
  });
};

/**
 * 
 * @param platform - id of platform e.g 'R1'
 * @returns Latest build per core 
 */
export async function getLatestBuildPerCore(platform: string): Promise<Build[]> {
    // TODO: [Gary] Expand API support to reduce data overfetch and using builds
    const res = await fetch(
      `${Consts.BASE_URL_REPLAY_API}/builds?platforms=${platform}&buildType=core`
    );
    
    const allBuilds = await res.json();
    const uniqBuilds = getUniqBy(sortByBuildDate(allBuilds), "coreId");

    return sortByCoreName(uniqBuilds);
}
