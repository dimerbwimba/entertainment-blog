import mongoose, { Schema, Document } from 'mongoose';
import marked from 'marked';
import slugify from 'slugify';
import createDomPurifier from 'dompurify';
import { JSDOM } from 'jsdom';

const dompurify = createDomPurifier(new JSDOM().window);

interface IArticle extends Document {
  title: string;
  author?: string;
  video?: string;
  video1?: string;
  description?: string;
  category: string;
  tags: string;
  related1: string;
  related2: string;
  markdown: string;
  markdown1: string;
  markdown2: string;
  markdown3: string;
  markdown4: string;
  slug: string;
  createdAt: Date;
  sanitizedHTML: string;
  sanitizedHTML1: string;
  sanitizedHTML2: string;
  sanitizedHTML3: string;
  sanitizedHTML4: string;
  articlePreviewMarkdown: string;
  articlePreviewTitle: string;
  views: number;
  shares: number;
  image?: string;
  image1?: string;
  image2?: string;
  timestamp: number;
}

const articleSchema = new mongoose.Schema<IArticle>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
    },
    video: {
      type: String,
    },
    video1: {
      type: String,
    },
    description: {
      required: false,
      type: String,
      trim: true,
    },
    category: {
      required: true,
      type: String,
      trim: true,
    },
    tags: {
      required: true,
      type: String,
      trim: true,
    },
    related1: {
      required: true,
      type: String,
      trim: true,
    },
    related2: {
      required: true,
      type: String,
      trim: true,
    },
    markdown: {
      type: String,
      required: true,
      trim: true,
    },
    markdown1: {
      type: String,
      required: true,
      trim: true,
    },
    markdown2: {
      type: String,
      required: true,
      trim: true,
    },
    markdown3: {
      type: String,
      required: true,
      trim: true,
    },
    markdown4: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    sanitizedHTML: {
      type: String,
      require: true,
    },
    sanitizedHTML1: {
      type: String,
      require: true,
    },
    sanitizedHTML2: {
      type: String,
      require: true,
    },
    sanitizedHTML3: {
      type: String,
      require: true,
    },
    sanitizedHTML4: {
      type: String,
      require: true,
    },
    articlePreviewMarkdown: {
      type: String,
      required: true,
    },
    articlePreviewTitle: {
      type: String,
      required: true,
    },
    views: {
      default: 0,
      type: Number,
    },
    shares: {
      default: 0,
      type: Number,
    },
    image: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    timestamp: Number,
  },
  {
    timestamps: true,
  }
);

articleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  if (this.markdown) {
    this.sanitizedHTML = dompurify.sanitize(marked(this.markdown));
  }
  if (this.markdown1) {
    this.sanitizedHTML1 = dompurify.sanitize(marked(this.markdown1));
  }
  if (this.markdown2) {
    this.sanitizedHTML2 = dompurify.sanitize(marked(this.markdown2));
  }
  if (this.markdown3) {
    this.sanitizedHTML3 = dompurify.sanitize(marked(this.markdown3));
  }
  if (this.markdown4) {
    this.sanitizedHTML4 = dompurify.sanitize(marked(this.markdown4));
  }
  if (this.sanitizedHTML) {
    this.articlePreviewMarkdown = fn(100, this.sanitizedHTML);
  }
  if (this.title) {
    this.articlePreviewTitle = fn(60, this.title);
  }

  function fn(count: number, text: string) {
    return text.slice(0, count) + (text.length > count ? '...' : '');
  }
  next();
});

const Article: mongoose.Model<IArticle> =
  mongoose.models.Article || mongoose.model<IArticle>('Article', articleSchema);

export default Article;