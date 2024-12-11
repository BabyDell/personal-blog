import fs from 'fs';
import matter from "gray-matter";
import path from "path";


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

export function getAllContent(contentType: string): ExtractedContent[] {
    const contentDirectory = path.join(process.cwd(), "src", "content", contentType);
  const fileNames = fs.readdirSync(contentDirectory);

  const allContent = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    // Split the content by ## headers
    const sections = content.split(/(?=^##\s+)/m);

    const contentSections: ContentSection[] = [];

    for (let section of sections) {
      section = section.trim();
      if (section) {
        const [title, ...contentParts] = section.split('\n');
        contentSections.push({
          title: title.replace(/^##\s+/, '').trim(),
          content: contentParts.join('\n').trim()
        });
      }
    }

    return {
      id,
      title: frontmatter.title,
      description: frontmatter.description,
      tags: frontmatter.tags,
      imageSrc: frontmatter.imageSrc,
      date: frontmatter.date,
      content: contentSections,
    };
  });

  // Sort posts by date
  return allContent.sort((a, b) => (a.date > b.date ? -1 : 1));
}

