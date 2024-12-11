import matter from "gray-matter";
import path from "path";
import fs from "fs";

interface ContentSection {
  title: string;
  content: string;
}

export interface ExtractedContent {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  date: string;
  content: ContentSection[];
}

export function getContent(
  contentType: string,
  slug: string
): ExtractedContent {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "content", contentType, `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Split the content by ## headers
  const sections = content.split(/(?=^##\s+)/m);

  const contentSections: ContentSection[] = [];

  for (let section of sections) {
    section = section.trim();
    if (section) {
      const [title, ...contentParts] = section.split("\n");
      contentSections.push({
        title: title.replace(/^##\s+/, "").trim(),
        content: contentParts.join("\n").trim(),
      });
    }
  }

  return {
    id: slug,
    title: frontmatter.title,
    description: frontmatter.description,
    tags: frontmatter.tags,
    imageSrc: frontmatter.imageSrc,
    date: frontmatter.date,
    content: contentSections,
  };
}
