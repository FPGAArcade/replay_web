import { remark } from "remark";
import stripMarkdown from "strip-markdown";
// @ts-ignore
import remarkExcerpt from "remark-excerpt";

export interface ExcerptOptions {
  words?: number;
  maxLength?: number;
  marker?: string;
  markerLimit?: boolean;
}

const DefaultOptions: ExcerptOptions = {
  words: 60,
  maxLength: 0,
  marker: "more",
  markerLimit: true,
};

export async function createExcerpt(md: string, options: ExcerptOptions = {}): Promise<string> {
  const opt = {...DefaultOptions, ...options}

  let text = (
    await remark()
      .use(remarkExcerpt, {
        identifier: opt.marker
      })
      .use(stripMarkdown, {
        remove: ["heading","image", "imageReference", "link", "linkReference"],
      })
      .process(md)
  )
    .toString()
    .trim();

  // When marker present, do not apply limits.
  if (opt.markerLimit || !md.includes(`<!--${opt.marker}-->`)) {
    if (opt.words && opt.words > 0) text = text.split(" ").slice(0, opt.words).join(" ");
    if (opt.maxLength && opt.maxLength > 0) text = text.slice(0, opt.maxLength);
  }

  if (['.', ','].includes(text.slice(-1)))
    return text.slice(0, -1) + '...'
  
  return text + '...';
}