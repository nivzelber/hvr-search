import { GridRowsProp } from "@mui/x-data-grid";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BRANCHES_REVALIDATE_INTERVAL } from "../../common/constants";
import { BranchesTable } from "../../components/branches-table";
import { BRANCHES_URL } from "../../components/pages/yellow/consts";
import { columns } from "../../components/pages/yellow/table-defs";

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

type YellowProps = StaticProps & {};

const Yellow: NextPage<YellowProps> = ({ branches }) => {
  const rows: GridRowsProp<Branch> = branches;

  return (
    <div>
      <Head>
        <title>Yellow</title>
        <meta name="description" content="כרטיס צהוב סניפים" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BranchesTable rows={rows} columns={columns} />
      </main>
    </div>
  );
};

export default Yellow;
