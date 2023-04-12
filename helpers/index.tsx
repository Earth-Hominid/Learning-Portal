import cookie from 'cookie';
import type { NextApiRequest } from 'next';

export const parseCookies = (req: NextApiRequest) => {
  return cookie.parse(req ? req.headers.cookie || '' : '');
};
