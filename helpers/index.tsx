import cookie from 'cookie';
import { NextApiRequest } from 'next';

export function parseCookies(req: NextApiRequest): { [key: string]: string } {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}
