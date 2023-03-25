import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { BranchLink } from "../../../components/branches-table";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";
import { CellWrapper } from "../../branches-table";

import { LOGO_BASE_URL } from "./consts";

import type { Branch } from "./branch";
const imageLoader = makeImageLoader(LOGO_BASE_URL);

export const columns: GridColDef<Branch>[] = [
  {
    field: "img",
    headerName: "",
    flex: 0,
    renderCell: ({ row: branch }) => (
      <BranchLink href={branch.website}>
        <Image loader={imageLoader} src={branch.img} alt={branch.name} width={100} height={50} />
      </BranchLink>
    )
  },
  {
    field: "name",
    headerName: "שם",
    flex: 2,
    renderCell: ({ row: branch }) => {
      return (
        <CellWrapper>
          <p>{branch.name}</p>
          <p>
            {branch.category}
            {branch.type && " - " + branch.type.split(",").join(" | ")}
          </p>
        </CellWrapper>
      );
    }
  },
  {
    field: "details",
    headerName: "פרטים",
    flex: 3,

    renderCell: ({ row: branch }) => (
      <CellWrapper>
        <p>
          {branch.city} | {branch.address}
        </p>
        <a href={`tel:${branch.phone}`}>{branch.phone}</a>
      </CellWrapper>
    )
  }
];