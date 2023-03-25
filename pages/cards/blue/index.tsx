import { GridRowsProp } from "@mui/x-data-grid";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import { BranchesTable } from "../../../components/branches-table";

import { BRANCHES_REVALIDATE_INTERVAL, BRANCHES_URL } from "./consts";
import { columns } from "./table-defs";

import type { RawBranch, Branch } from "./branch";

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

type BlueProps = StaticProps & {};

const Blue: NextPage<BlueProps> = ({ branches }) => {
  const rows: GridRowsProp<Branch> = branches;

  return (
    <div>
      <Head>
        <title>Blue</title>
        <meta name="description" content="כרטיס כחול סניפים" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BranchesTable rows={rows} columns={columns} />
      </main>
    </div>
  );
};

export default Blue;
