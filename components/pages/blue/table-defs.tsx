import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { BranchLink } from "../../../components/branches-table";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";
import { buildAddressLink } from "../../../utils/location";
import { CellWrapper } from "../../branches-table";
import { commonColumnProperties } from "../../branches-table/common";

import { LOGO_BASE_URL } from "./consts";

import type { Branch } from "./branch";
const imageLoader = makeImageLoader(LOGO_BASE_URL);

const baseColumns: GridColDef<Branch>[] = [
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
        <a href={buildAddressLink(`${branch.address} ${branch.city}`)}>
          {branch.city} | {branch.address}
        </a>
        <a href={`tel:${branch.phone}`}>{branch.phone}</a>
      </CellWrapper>
    )
  }
];

export const columns: GridColDef<Branch>[] = baseColumns.map(column => ({
  ...commonColumnProperties,
  ...column
}));
