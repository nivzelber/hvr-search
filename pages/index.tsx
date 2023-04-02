import Head from "next/head";

import { Index } from "../components/pages/index";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>מחפשים בחבר</title>
        <meta name="description" content="חיפוש סניפים שמכבדים כרטיסי חבר" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Index />
      </main>
    </div>
  );
};

export default Home;
