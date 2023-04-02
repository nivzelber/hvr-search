import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { Layout } from "../../components/layout";
import { BlueCard } from "../../components/pages/blue";
import { BRANCHES_URL } from "../../components/pages/blue/consts";
import { useSetThemeOnMount } from "../../hooks/useSetThemeOnMount";

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
  useSetThemeOnMount("blue");

  return (
    <div>
      <Head>
        <title>חבר טעמים</title>
        <meta name="description" content="סניפים חבר טעמים" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <BlueCard branches={branches} />
      </Layout>
    </div>
  );
};

export default BlueCardPage;
