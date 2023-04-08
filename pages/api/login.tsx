import { API_URL } from '@/config/index';
import cookie from 'cookie';

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
  message?: {
    messages: {
      id: string;
      message: string;
      field?: string;
    }[];
  }[];
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

    const strapiResponse = await fetch(`${API_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data: StrapiResponseData = await strapiResponse.json();

    if (strapiResponse.ok) {
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
        message:
          data.message?.[0]?.messages?.[0]?.message ?? 'Something went wrong',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default loginUser;
