import { FC } from 'react';
import Head from 'next/head';

const Favicons: FC = () => {
  return <Head>
    <link
      rel="icon"
      href="/favicon.ico"
      sizes="any"
    />
    <link
      rel="icon"
      href="/icon.svg"
      type="image/svg+xml"
    />
    <link
      rel="apple-touch-icon"
      href="/apple-touch-icon.png"
      type="image/png"
      sizes="180x180"
    />
    <link
      rel="manifest"
      href="/site.webmanifest"
    />
  </Head>;
};

export default Favicons;
