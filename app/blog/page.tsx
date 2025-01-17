import Link from "next/link";
import Text from "../../components/Text";
import { getDatabase } from "../../lib/notion"
import Title from "../../components/Title";
import { Input } from "../../components/ui/Input";


async function getPosts() {
  const database = await getDatabase();
  return database;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="mx-10 mt-10">
      <div>
        <Title props="Blog" isPrimary={true} />
        <Title props="I write about websites, books I read, productivity hacks and my ideas." isPrimary={false} />
      </div>
      {/* this feature is added when I have 20+ blogs written */}
      {/* <div className="my-4 w-[400px]">
        <Input type="text" placeholder="Search.." className="border-rounded text-lg font-medium" />
      </div> */}
      <ol className="mt-[80px]">
        {posts
          .map((post: any) => {
            const date = new Date(post.last_edited_time).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            });
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            return (
              <li key={post.id} className="flex gap-8 mt-4 ">
                <p className="text-slate-400">{date}</p>
                <h1 className="font-light">
                  <Link href={`/blog/${slug}`}>
                    <Text text={post.properties?.Name.title} />
                  </Link>
                </h1>
                <Link hidden href={`/blog/${slug}`}>Read post →</Link>
              </li>
            );
          })}
      </ol>
    </div>
  );
}


