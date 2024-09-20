import { Fragment } from 'react';
import Link from 'next/link';
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Text from '../Text';
import styles from '../../styles/post.module.css';

export function renderBlock(block: BlockObjectResponse) {
  const { type, id } = block;
  switch (type) {
    case 'paragraph':
      return (
        <p className="mb-4">
          <Text text={block.paragraph.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold mt-8 mb-4">
          <Text text={block.heading_1.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          <Text text={block.heading_2.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="text-xl font-medium mt-4 mb-2">
          <Text text={block.heading_3.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="ml-6 mb-1">
          <Text text={block[type].rich_text} />
        </li>
      );
    case 'to_do':
      return (
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            defaultChecked={block.to_do.checked}
            className="mr-2"
          />
          <Text text={block.to_do.rich_text} />
        </div>
      );
    case 'toggle':
      return (
        <details className="mb-4">
          <summary className="cursor-pointer">
            <Text text={block.toggle.rich_text} />
          </summary>
          {/* @ts-ignore */}
          {block.children?.map((child) => (
            <div key={child} className="ml-4 mt-2">
              {renderBlock(child as BlockObjectResponse)}
            </div>
          ))}
        </details>
      );
    case 'image':
      const src = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
      const caption = block.image.caption ? block.image.caption[0]?.plain_text : '';
      return (
        <figure className="my-6">
          <img src={src} alt={caption} className="rounded-lg shadow-md" />
          {caption && <figcaption className="text-center text-sm mt-2 text-gray-600">{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr className="my-8 border-gray-300" />;
    case 'quote':
      return (
        <blockquote className="pl-4 border-l-4 border-gray-300 italic my-4">
          <Text text={block.quote.rich_text} />
        </blockquote>
      );
    case 'code':
      return (
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
          <code className="text-sm">
            <Text text={block.code.rich_text} />
          </code>
        </pre>
      );
    case 'file':
      const src_file = block.file.type === 'external' ? block.file.external.url : block.file.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = block.file.caption && block.file.caption[0]?.plain_text;
      return (
        <div className="my-4">
          <Link href={src_file} className="flex items-center text-blue-600 hover:underline">
            📎 {lastElementInArray.split('?')[0]}
          </Link>
          {caption_file && <div className="text-sm text-gray-600 mt-1">{caption_file}</div>}
        </div>
      );
    case 'bookmark':
      return (
        <a
          href={block.bookmark.url}
          target="_blank"
          rel="noreferrer noopener"
          className="block my-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {block.bookmark.url}
        </a>
      );
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
}