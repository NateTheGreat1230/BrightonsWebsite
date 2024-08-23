import { serverQueryContent } from "#content/server";
export async function serverSearchContent(event, filterQuery) {
  if (filterQuery) {
    return await serverQueryContent(event).where(filterQuery).find();
  } else {
    return await serverQueryContent(event).find();
  }
}
const HEADING = /^h([1-6])$/;
const isHeading = (tag) => HEADING.test(tag);
export function splitPageIntoSections(page, { ignoredTags }) {
  const path = page._path ?? "";
  const sections = [];
  if (!page?.body?.children) {
    return sections;
  }
  let section = -1;
  let previousHeadingLevel = 0;
  const titles = [];
  for (const item of page.body.children) {
    const tag = item.tag || "";
    if (isHeading(tag)) {
      const currentHeadingLevel = Number(tag.match(HEADING)?.[1]) ?? 0;
      const title = extractTextFromAst(item).trim();
      if (currentHeadingLevel === 1) {
        titles.splice(0, titles.length);
      } else if (currentHeadingLevel < previousHeadingLevel) {
        titles.splice(currentHeadingLevel - 1, titles.length - 1);
      } else if (currentHeadingLevel === previousHeadingLevel) {
        titles.pop();
      }
      sections.push({
        id: `${path}#${item.props?.id}`,
        title,
        titles: [...titles],
        content: "",
        level: currentHeadingLevel
      });
      titles.push(title);
      previousHeadingLevel = currentHeadingLevel;
      section += 1;
    }
    if (!isHeading(tag)) {
      if (!sections[section]) {
        sections[section] = {
          id: "",
          title: "",
          titles: [],
          content: "",
          level: 0
        };
      }
      sections[section].content += extractTextFromAst(item, ignoredTags).trim();
    }
  }
  return sections;
}
function extractTextFromAst(node, ignoredTags = []) {
  let text = "";
  if (node.type === "text") {
    text += node.value;
  }
  if (ignoredTags.includes(node.tag ?? "")) {
    return "";
  }
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child, ignoredTags);
    }
  }
  return text;
}
