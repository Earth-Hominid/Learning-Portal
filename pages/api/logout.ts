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

const logoutUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // destroy cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
      })
    );

    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default logoutUser;
