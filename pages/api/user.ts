import cookie from 'cookie';
import { API_URL } from '@/config';
import type { NextApiRequest, NextApiResponse } from 'next';

interface StrapiResponseData {
  jwt: string;
  user: {
    username: string;
    email: string;
    id: number;
    created_at: string;
    updated_at: string;
  };
  error?: {
    message: string;
    status: number;
    name: string;
  };
  statusCode?: number;
}

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authorized' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${API_URL}/api/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default user;
