import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/config';

type Data = {
  username: string;
  password: string;
};

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    const strapiResponse = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await strapiResponse.json();

    if (strapiResponse.ok) {
      // set cookie
      res.status(200).json({ user: data.user });
    } else {
      res.status(data.statusCode).json({
        message: data.message[0].messages[0].message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default loginUser;
