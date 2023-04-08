import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';
import { LanguageProvider } from '@/context/language-context';
import { AuthProvider, AuthProviderProps } from '@/context/AuthContext';

export default function App({ Component, pageProps }: AppPropsWithAuth) {
  return (
    <>
      <AuthProvider>
        <DarkProvider>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </DarkProvider>
      </AuthProvider>
    </>
  );
}

type AppPropsWithAuth = AppProps & AuthProviderProps;
