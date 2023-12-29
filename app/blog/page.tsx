import Link from "next/link";
import Text from "../../components/Text";
import { getDatabase } from "../../lib/notion"

export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? "NOTION_DATABASE_ID";

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts[1])

  return (
    <div>
      <h2>All Posts</h2>
      <ol>
        {posts.map((post:any) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          const slug = post.properties?.Slug?.rich_text[0].text.content;
          return (
            <li key={post.id}>
              <h3>
                <Link href={`/article/${slug}`}>
                  <Text title={post.properties?.Name.title} />
                </Link>
              </h3>

              <p>{date}</p>
              <Link href={`/blog/${slug}`}>Read post →</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
