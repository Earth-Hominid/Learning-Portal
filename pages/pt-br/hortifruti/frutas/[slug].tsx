import Layout from '@/components/Layout';
import ArticleItem from '@/components/articles/article-item/ArticleItem';
import { API_URL, PER_PAGE } from '@/config/index';

interface ArticleInterface {
  id: string;
  attributes: {
    content: string;
    subcategory: string;
    categoryLink: string;
    headingLink: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
}
