import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { Layout } from "../../components/layout";
import { BlueCard } from "../../components/pages/blue";
import { BRANCHES_URL } from "../../components/pages/blue/consts";
import { useExtendedBranches } from "../../components/pages/blue/useExtendedBranches";
import { useFilters } from "../../components/pages/blue/useFilters";
import { useBranchesSearch } from "../../hooks/useBranchesSearch";
import { useSetThemeOnMount } from "../../hooks/useSetThemeOnMount";

import type { NextPage } from "next";

import type { RawBranch, Branch, ExtendedBranch } from "../../components/pages/blue/branch";
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

  const extendedBranches = useExtendedBranches(branches);

  const { filteredBranches, FiltersForm } = useFilters(extendedBranches);

  const searchedRows = useBranchesSearch<ExtendedBranch>({
    branches: filteredBranches,
    filterParams: ["name", "desc", "city", "address", "f_name"]
  });

  return (
    <>
      <Head>
        <title>חבר טעמים</title>
        <meta name="description" content="סניפים חבר טעמים" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout topbarProps={{ FiltersForm }}>
        <BlueCard branches={searchedRows} />
      </Layout>
    </>
  );
};

export default BlueCardPage;
