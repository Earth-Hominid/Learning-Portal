import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

type User = {
  username: string;
  email: string;
  identifier: string;
};

type Error = {
  message: string;
};

type AuthContextType = {
  user: User | null;
  error: Error | null;
  login: (credentials: {
    email: string;
    identifier: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  login: async () => {},
  logout: () => {},
  clearError: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const router = useRouter();

  const login = async ({
    email: identifier,
    password,
  }: {
    email: string;
    identifier: string;
    password: string;
  }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
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
    console.log(data);
    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError(null);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const logout = async () => {
    console.log('Logout');

    const isLoggedIn = async ({ user }: { user: User }) => {
      console.log(`isLoggedIn: ${user}`);
    };
    // setUser(null);
    // router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
