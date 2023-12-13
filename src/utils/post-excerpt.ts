import { remark } from "remark";
import stripMarkdown from "strip-markdown";
// @ts-ignore
import remarkExcerpt from "remark-excerpt";

export interface ExcerptOptions {
  words?: number;
  maxLength?: number;
  marker?: string;
}

const DefaultOptions: ExcerptOptions = {
  words: 60,
};

export async function createExcerpt(md: string, options: ExcerptOptions = {}): Promise<string> {
  let text = (
    await remark()
      .use(remarkExcerpt, {
        identifier: options.marker ?? DefaultOptions.marker,
      })
      .use(stripMarkdown, {
        remove: ["heading"],
      })
      .process(md)
  )
    .toString()
    .trim();

  const numWords = options.words ?? DefaultOptions.words ?? 0;
  const maxLength = options.maxLength ?? DefaultOptions.maxLength ?? 0;

  if (numWords > 0) text = text.split(" ").slice(0, numWords).join(" ");
  if (maxLength > 0) text = text.slice(0, maxLength);

  return text;
}