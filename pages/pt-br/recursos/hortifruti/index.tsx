import Hortifruti from '@/components/final-pages/hortifruti/Hortifruti';
import { API_URL, PER_PAGE } from '@/config/index';

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/pt-br?filters[category][$eq]=hortifruti&populate=*&sort=title:asc`
  );

  const JSONresponse = await res.json();
  const articles = JSONresponse.data;

  return {
    props: { articles },
  };
};

const HortifrutiPage = () => {
  return (
    <>
      <Hortifruti />
    </>
  );
};

export default HortifrutiPage;
