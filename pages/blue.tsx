import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { GetStaticProps } from "next";
import Head from "next/head";

import type { NextPage } from "next";

interface Branch {
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

interface StaticProps {
  branches: Branch[];
}

const BRANCHES_URL = "https://www.hvr.co.il/bs2/datasets/teamimcard_branches.json";
const LOGO_BASE_URL = "https://www.hvr.co.il/img_hvr/Gift_card_teamim/";
const BRANCHES_REVALIDATE_INTERVAL = 60 * 60; // In seconds

export const getStaticProps: GetStaticProps<StaticProps> = async context => {
  const restaurantsResponse = await fetch(BRANCHES_URL);
  const json = await restaurantsResponse.json();
  const branches: Branch[] = json.branch;

  return {
    props: {
      branches
    },
    revalidate: BRANCHES_REVALIDATE_INTERVAL
  };
};

const columns: GridColDef<Branch>[] = [
  {
    field: "img",
    headerName: "",
    width: 150,
    renderCell: ({ row: branch }) => <img src={LOGO_BASE_URL + branch.img} alt={branch.name} />
  },
  {
    field: "name",
    headerName: "שם",
    width: 500,
    renderCell: ({ row: branch }) => {
      console.log(branch.website);
      return (
        <div>
          {/* '//' is needed since most URL's come without the http(s) prefix */}
          <a href={"//" + branch.website} target="_blank">
            {branch.name}
          </a>
          <p>
            {branch.category} - {branch.type?.split(",").join(" | ")}
          </p>
        </div>
      );
    }
  },
  {
    field: "details",
    headerName: "פרטים",
    width: 500,
    renderCell: ({ row: branch }) => (
      <div>
        <p>{branch.address}</p>
        <a href={`tel:${branch.phone}`}>{branch.phone}</a>
      </div>
    )
  },
  { field: "desc", headerName: "הערות", width: 500 }
];

type BlueProps = StaticProps & {};

const Blue: NextPage = ({ branches }: BlueProps) => {
  const rows: GridRowsProp<Branch> = branches.map((branch, id) => ({
    id,
    ...branch
  }));
  return (
    <div>
      <Head>
        <title>Blue</title>
        <meta name="description" content="כרטיס כחול סניפים" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: "100vh", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </main>
    </div>
  );
};

export default Blue;
