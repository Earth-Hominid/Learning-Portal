import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';
import { LanguageProvider } from '@/context/language-context';
import { AuthProvider } from '@/context/auth-context';
import { ClerkProvider } from '@clerk/nextjs';

export default function App({ Component, pageProps }: AppProps) {
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
