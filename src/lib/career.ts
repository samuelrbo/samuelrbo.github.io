import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export const getCareerSummary = async () => {
  const fullPath = path.join(contentDirectory, `career-summary.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const experienceTime = new Date().getFullYear() - 2007;
  const contentHtml = processedContent
    .toString()
    .replace('{{experienceTime}}', `${experienceTime}`);

  return {
    contentHtml,
    ...(matterResult.data as { title: string }),
  }
}