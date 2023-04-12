import DashboardPage from '@/components/account/dashboard/Dashboard';
import { parseCookies } from '@/helpers';

const dashboard = () => {
  return <DashboardPage />;
};

export default dashboard;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {},
  };
}
