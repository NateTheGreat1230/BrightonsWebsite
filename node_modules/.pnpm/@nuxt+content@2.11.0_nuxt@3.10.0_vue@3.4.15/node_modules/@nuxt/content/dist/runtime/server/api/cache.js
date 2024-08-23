import { defineEventHandler } from "h3";
import { getContentIndex } from "../content-index.js";
import { cacheStorage, serverQueryContent } from "../storage.js";
import { useRuntimeConfig } from "#imports";
export default defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});
