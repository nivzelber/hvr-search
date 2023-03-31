import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { Layout } from "../../components/layout";
import { YellowCard } from "../../components/pages/yellow";
import { BRANCHES_URL } from "../../components/pages/yellow/consts";

import type { RawBranch, Branch } from "../../components/pages/yellow/branch";

import type { NextPage } from "next";
interface StaticProps {
  branches: Branch[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async _context => {
  const response = await axios.get<RawBranch[]>(BRANCHES_URL);

  const branches: Branch[] = response.data.map(branch => ({
    id: branch.sn,
    ...branch
  }));

  return {
    props: {
      branches
    },
    revalidate: BRANCHES_REVALIDATE_INTERVAL
  };
};

type YellowPageProps = StaticProps & {};

const YellowPage: NextPage<YellowPageProps> = ({ branches }) => {
  return (
    <div>
      <Head>
        <title>Yellow</title>
        <meta name="description" content="כרטיס צהוב סניפים" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <YellowCard branches={branches} />
        </main>
      </Layout>
    </div>
  );
};

export default YellowPage;
