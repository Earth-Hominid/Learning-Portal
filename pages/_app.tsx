import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DarkProvider } from '@/context/dark-context';
import { LanguageProvider } from '@/context/language-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkProvider>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </DarkProvider>
    </>
  );
}
