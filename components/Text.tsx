import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface TextProps {
  text: RichTextItemResponse[];
}

export default function Text({ text }: TextProps) {
  if (!text) return null;
  return (
    <>
      {text.map((value, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          plain_text,
          href
        } = value;

        return (
          <span
            key={index}
            className={`
              ${bold ? "font-bold" : ""}
              ${code ? "font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded" : ""}
              ${italic ? "italic" : ""}
              ${strikethrough ? "line-through" : ""}
              ${underline ? "underline" : ""}
              ${color !== "default" ? `text-${color}-600 dark:text-${color}-400` : ""}
            `}
          >
            {href ? (
              <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
                {plain_text}
              </a>
            ) : (
              plain_text
            )}
          </span>
        );
      })}
    </>
  );
}