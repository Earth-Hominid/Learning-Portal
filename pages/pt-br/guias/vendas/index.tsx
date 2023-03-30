import Vendas from '@/components/vendas/Vendas';

interface Article {
  id: string;
  attributes: {
    content: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    date: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
        };
      };
    };
  };
}

interface Props {
  page: number;
  total: number;
  articles: Array<Article>;
}

export default function ComprasPage() {
  return (
    <>
      < />
    </>
  );
}
