import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface TextProps {
  text: TextRichTextItemResponse[];
}

export default function Text({ text }: TextProps) {
  if (!text || text.length === 0) {
    return null;
  }

  return (
    <div>
      {text.map((value) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        return (
          <span
            key={text.content}
            className={`
              ${bold ? "font-bold" : ""}
              ${italic ? "italic" : ""}
              ${underline ? "underline" : ""}
              ${strikethrough ? "line-through" : ""}
              ${code ? "font-mono bg-gray-100 p-1 rounded" : ""}
              ${color !== "default" ? `text-${color}` : ""}
            `}
          >
            {text.link ? (
              <a href={text.link.url} className="text-blue-500 underline">
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </div>
  );
}
