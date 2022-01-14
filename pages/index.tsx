import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showLink, setShowLink] = useState<boolean>(true);
  const toggleLink = () => {
    setShowLink(!showLink);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={toggleLink}>Toggle Link</button>
        {showLink && <Link href="/about">Go To About Page</Link>}
      </main>
    </div>
  );
}
