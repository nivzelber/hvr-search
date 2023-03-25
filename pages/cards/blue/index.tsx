import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";

import type { NextPage } from "next";

// NOTE: this is not the full structure of `branch`
// Most of it is not needed
interface RawBranch {
  img: string;
  name: string;
  desc: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  category: string;
  type?: string;
  kosher: string;
  is_new: string;
  website: string;
  search_words: string;
}

interface Branch extends RawBranch {
  id: string;
}

interface StaticProps {
  branches: Branch[];
}

const BRANCHES_URL = "https://www.hvr.co.il/bs2/datasets/teamimcard_branches.json";
const LOGO_BASE_URL = "https://www.hvr.co.il/img_hvr/Gift_card_teamim/";
const BRANCHES_REVALIDATE_INTERVAL = 60 * 60; // In seconds

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

const colSizeProps: Partial<GridColDef<Branch>> = {
  flex: 1
};

const columns: GridColDef<Branch>[] = [
  {
    field: "img",
    headerName: "",
    flex: 0,
    renderCell: ({ row: branch }) => <img src={LOGO_BASE_URL + branch.img} alt={branch.name} />
  },
  {
    field: "name",
    headerName: "שם",
    ...colSizeProps,

    renderCell: ({ row: branch }) => {
      return (
        <div>
          {/* '//' is needed since most URL's come without the http(s) prefix */}
          <a href={"//" + branch.website} target="_blank" rel="noreferrer">
            {branch.name}
          </a>
          <p>
            {branch.category}
            {branch.type && " - " + branch.type.split(",").join(" | ")}
          </p>
        </div>
      );
    }
  },
  {
    field: "details",
    headerName: "פרטים",
    ...colSizeProps,
    renderCell: ({ row: branch }) => (
      <div>
        <p>{branch.address}</p>
        <a href={`tel:${branch.phone}`}>{branch.phone}</a>
      </div>
    )
  },
  {
    field: "desc",
    headerName: "הערות",
    ...colSizeProps
  }
];

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
        <div style={{ height: "100vh", width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </main>
    </div>
  );
};

export default Blue;
