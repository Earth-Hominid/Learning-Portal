import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardPage from '@/components/account/dashboard/Dashboard';
import AuthContext from '@/context/auth-context';
import { parseCookies } from '@/helpers';
import { NextApiRequest, NextApiResponse } from 'next';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || !router) {
      router.push('/account/login');
    }
  }, [user, router]);

  return <DashboardPage />;
};

export default Dashboard;
