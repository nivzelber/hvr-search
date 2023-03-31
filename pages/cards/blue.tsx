import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { Layout } from "../../components/layout";
import { BlueCard } from "../../components/pages/blue";
import { BRANCHES_URL } from "../../components/pages/blue/consts";

import type { RawBranch, Branch } from "../../components/pages/blue/branch";

import type { NextPage } from "next";
interface StaticProps {
  branches: Branch[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async _context => {
  const response = await axios.get<{ branch: RawBranch[] }>(BRANCHES_URL);

  const branches: Branch[] = response.data.branch.map(branch => ({
    id: branch.name + branch.address,
    ...branch
  }));

  return {
    props: {
      branches
    },
    revalidate: BRANCHES_REVALIDATE_INTERVAL
  };
};

type Props = StaticProps & {};

const BlueCardPage: NextPage<Props> = ({ branches }) => {
  return (
    <div>
      <Head>
        <title>Blue</title>
        <meta name="description" content="כרטיס כחול סניפים" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <BlueCard branches={branches} />
        </main>
      </Layout>
    </div>
  );
};

export default BlueCardPage;
