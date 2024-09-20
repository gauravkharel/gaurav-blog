import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlocks, getPageFromSlug } from '../../../lib/notion';
import Text from '../../../components/Text';
import { renderBlock } from '../../../components/notion/Renderer';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

function getPageTitle(page: PageObjectResponse): string {
  const titleProperty = page.properties['Name'];
  if (titleProperty && titleProperty.type === 'title' && titleProperty.title.length > 0) {
    return titleProperty.title[0].plain_text;
  }
  return 'Untitled';
}

function getPageDescription(page: PageObjectResponse): string {
  const descriptionProperty = page.properties['Description'];
  if (descriptionProperty && descriptionProperty.type === 'rich_text' && descriptionProperty.rich_text.length > 0) {
    return descriptionProperty.rich_text[0].plain_text;
  }
  return '';
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageFromSlug(params.slug);
  if (!page) return {};
  
  const title = getPageTitle(page);
  const description = getPageDescription(page);
  
  return { title, description };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const page = await getPageFromSlug(params.slug);
  if (!page) notFound();

  const blocks = await getBlocks(page.id);
  const title = getPageTitle(page);
  const description = getPageDescription(page);

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-xl text-gray-600 mb-8">{description}</p>
      )}
      <div className="prose dark:prose-invert max-w-none">
        {blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))}
      </div>
      <Link href="/blog" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to blog
      </Link>
    </article>
  );
}