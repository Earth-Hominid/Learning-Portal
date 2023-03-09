import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cormorant&display&family=Merriweather&family=Montserrat&family=Nunito&family=Paytone+One&family=Poppins&family=Roboto&family=Rubik&family=Schoolbell&family=Tinos&family=Inter&family=Opensans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
