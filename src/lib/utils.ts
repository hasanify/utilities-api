import * as cheerio from "cheerio";
export const extractText = (
  $: cheerio.CheerioAPI,
  elems: cheerio.Cheerio<cheerio.Element>
) => {
  const result: string[] = [];
  elems.each((index, p) => {
    result.push($(p).text());
  });

  return result;
};
