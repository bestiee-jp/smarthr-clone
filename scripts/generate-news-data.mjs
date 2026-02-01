import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newsDirectory = path.join(__dirname, '..', 'content', 'news');
const outputPath = path.join(__dirname, '..', 'src', 'lib', 'news-data.json');

function getAllNewsData() {
  const fileNames = fs.readdirSync(newsDirectory);
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md') && !fileName.startsWith('_'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        theme: data.theme || 'その他',
        content: content,
        image: data.image || '/news/default.png',
        imageType: data.imageType || 'notice',
      };
    });

  // Sort by date (newest first)
  return articles.sort((a, b) => {
    const dateA = a.date.replace(/\./g, '-');
    const dateB = b.date.replace(/\./g, '-');
    return dateB.localeCompare(dateA);
  });
}

const newsData = getAllNewsData();
fs.writeFileSync(outputPath, JSON.stringify(newsData, null, 2));
console.log(`Generated news data with ${newsData.length} articles`);
