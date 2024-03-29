import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/config';

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

const loginUser = async (
  req: NextApiRequest,
  res: NextApiResponse<
    { user?: StrapiResponseData['user'] } | { message: string }
  >
) => {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data: StrapiResponseData = await strapiRes.json();

    if (strapiRes.ok) {
      // set cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      );

      res.status(200).json({ user: data.user });
    } else {
      res.status(data.statusCode ?? 400).json({
        message: data.error?.message ?? 'Something went wrong',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default loginUser;
