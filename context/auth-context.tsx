import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    return () => checkUserLoggedIn();
  }, []);
};

const registerUser = async (user) => {
  const res = await fetch(`${NEXT_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (res.ok) {
    setUser(data.user);
    router.push('/account/dashboard');
  } else {
    setError(data.message);
    setError(null);
  }
};

const loginUser = async ({ email: identifier, password }) => {
  const res = await fetch(`${NEXT_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    setUser(data.user);
    router.push('/account/dashboard');
  } else {
    setError(data.message);
    setError(null);
  }
};
