import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/config/index';

type User = {
  username: string;
  email: string;
};

type Error = {
  message: string;
};

type AuthContextType = {
  user: User | null;
  error: Error | null;
  logIn: (credentials: {
    email: string;
    identifier: string;
    password: string;
  }) => Promise<void>;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  logIn: async () => {},
  logOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState({ name: 'Chris' });
  const [error, setError] = useState<Error | null>(null);

  const router = useRouter();

  const logIn = async ({
    email: identifier,
    password,
  }: {
    email: string;
    identifier: string;
    password: string;
  }) => {
    console.log({ identifier, password });
  };

  const logOut = async () => {
    console.log('Logout');

    const isLoggedIn = async ({ user }: { user: User }) => {
      console.log(`isLoggedIn: ${user}`);
    };
    // setUser(null);
    // router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, error, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
