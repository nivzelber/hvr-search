import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { BranchLink } from "../../../components/branches-table";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";
import { buildAddressLink, toDistanceString } from "../../../utils/location";
import { isMediumScreen } from "../../../utils/platform";
import { CellWrapper } from "../../branches-table";
import { commonColumnProperties } from "../../branches-table/common";

import { LOGO_BASE_URL } from "./consts";

import type { ExtendedBranch } from "./branch";
const imageLoader = makeImageLoader(LOGO_BASE_URL);

const baseColumns: GridColDef<ExtendedBranch>[] = [
  {
    field: "img",
    headerName: "",
    flex: isMediumScreen ? 0 : 1,
    renderCell: ({ row: branch }) => (
      <CellWrapper>
        <BranchLink href={branch.website}>
          <Image loader={imageLoader} src={branch.img} alt={branch.name} width={100} height={50} />
        </BranchLink>
      </CellWrapper>
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
    flex: 2,
    renderCell: ({ row: branch }) => {
      return (
        <CellWrapper>
          <a
            href={buildAddressLink(`${branch.address} ${branch.city}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {branch.city} | {branch.address}{" "}
            {branch.distanceFromUser && <> | {toDistanceString(branch.distanceFromUser)}</>}
          </a>
          <a href={`tel:${branch.phone}`}>{branch.phone}</a>
        </CellWrapper>
      );
    }
  },
  {
    field: "distanceFromUser"
  }
];

export const columns: GridColDef<ExtendedBranch>[] = baseColumns.map(column => ({
  ...commonColumnProperties,
  ...column
}));
