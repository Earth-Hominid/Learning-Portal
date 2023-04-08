import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';
import type { AppProps } from 'next/app';

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  error: string | null;
  register: (user: User) => Promise<void>;
  login: ({
    email,
    password,
    identifier,
  }: {
    email: string;
    password: string;
    identifier: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  clearError: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register the user
  const register = async (newUser: User) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
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

  // Login user
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const delayInMilliseconds = 10000;

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
    }
  };

  const clearError = () => {
    setError(null);
  };

  // Logout the user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/');
      setUser(null);
    }
  };

  // Check if the user is already logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// define the AuthProviderProps type
type AppPropsWithAuth = AppProps & {
  children: React.ReactNode;
};

// export the AuthProviderProps type and the AuthProvider component
export type { AppPropsWithAuth as AuthProviderProps };
