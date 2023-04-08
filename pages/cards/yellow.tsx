import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import type { NextPage } from "next";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { Layout } from "../../components/layout";
import { YellowCard } from "../../components/pages/yellow";
import { BRANCHES_URL } from "../../components/pages/yellow/consts";
import { useSetThemeOnMount } from "../../hooks/useSetThemeOnMount";
import type { RawBranch, Branch } from "../../components/pages/yellow/branch";
import { useBranchesSearch } from "../../hooks/useBranchesSearch";
import { useFilters } from "../../components/pages/yellow/useFilters";

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
  useSetThemeOnMount("yellow");

  const {filteredBranches, FiltersForm} = useFilters(branches);

  const searchedRows = useBranchesSearch({
    branches: filteredBranches,
    filterParams: ["company", "company_category", "search_words", "f_name"]
  });

  return (
    <>
      <Head>
        <title>חבר של קבע</title>
        <meta name="description" content="סניפים חבר של קבע" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout topbarProps={{FiltersForm}}>
        <YellowCard rows={searchedRows} />
      </Layout>
    </>
  );
};

export default YellowPage;
