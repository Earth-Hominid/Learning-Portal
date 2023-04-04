import Prateleiras from '@/components/final-pages/prateleiras/Prateleiras';
import { API_URL, PER_PAGE } from '@/config/index';

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/articles?filters[category][$startsWith]=prateleiras&populate=*&sort=title:asc`
  );
};
