import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

const databaseId = process.env.NOTION_DATABASE_ID!;

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = cache(async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

export const getPageFromSlug = cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  if (response?.results?.length) {
    return response.results[0] as PageObjectResponse;
  }
  return null;
});

export const getBlocks = cache(async (blockId: string): Promise<BlockObjectResponse[]> => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks as BlockObjectResponse[];
});