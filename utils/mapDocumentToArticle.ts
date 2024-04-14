import { WithId, Document } from 'mongodb';
import { IArticle } from '@/types/articles'; // Assuming IArticle is defined in types.ts or a similar file

const mapDocumentToArticle = (doc: WithId<Document>): IArticle => {
  return {
    _id: doc._id.toString(),
    title: doc.title || '',
    author: doc.author || '',
    video: doc.video || '',
    video1: doc.video1 || '',
    description: doc.description || '',
    category: doc.category || '',
    tags: doc.tags || '',
    related1: doc.related1 || '',
    related2: doc.related2 || '',
    markdown: doc.markdown || '',
    markdown1: doc.markdown1 || '',
    markdown2: doc.markdown2 || '',
    markdown3: doc.markdown3 || '',
    markdown4: doc.markdown4 || '',
    slug: doc.slug || '',
    createdAt: doc.createdAt || new Date(),
    sanitizedHTML: doc.sanitizedHTML || '',
    sanitizedHTML1: doc.sanitizedHTML1 || '',
    sanitizedHTML2: doc.sanitizedHTML2 || '',
    sanitizedHTML3: doc.sanitizedHTML3 || '',
    sanitizedHTML4: doc.sanitizedHTML4 || '',
    articlePreviewMarkdown: doc.articlePreviewMarkdown || '',
    articlePreviewTitle: doc.articlePreviewTitle || '',
    views: doc.views || 0,
    shares: doc.shares || 0,
    image: doc.image || '',
    image1: doc.image1 || '',
    image2: doc.image2 || '',
    timestamp: doc.timestamp || 0,
  };
};

export default mapDocumentToArticle;
