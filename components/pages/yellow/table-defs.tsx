import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { BranchLink, CellWrapper } from "../../../components/branches-table";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";
import { isMediumScreen } from "../../../utils/platform";
import { commonColumnProperties } from "../../branches-table/common";

import { LOGO_BASE_URL } from "./consts";

import type { Branch } from "./branch";
const imageLoader = makeImageLoader(LOGO_BASE_URL);

const baseColumns: GridColDef<Branch>[] = [
  {
    field: "logo",
    headerName: "",
    flex: isMediumScreen ? 0 : 1,
    renderCell: ({ row: branch }) => (
      <CellWrapper>
        <BranchLink href={branch.website}>
          <Image
            loader={imageLoader}
            src={branch.logo}
            alt={branch.company}
            width={155}
            height={155}
          />
        </BranchLink>
      </CellWrapper>
    )
  },
  {
    field: "company",
    headerName: "שם",
    flex: 3,
    renderCell: ({ row: branch }) => {
      return (
        <CellWrapper>
          <p>{branch.company}</p>
          <p>{branch.company_category}</p>
        </CellWrapper>
      );
    }
  },
  {
    field: "isOnline",
    headerName: "מכובד באונליין",
    align: "center",
    headerAlign: "center",
    minWidth: 120,
    flex: 1,
    renderCell: ({ row: branch }) => {
      return <p>{branch.is_online === "Y" && "✅"}</p>;
    }
  }
];

export const columns: GridColDef<Branch>[] = baseColumns.map(column => ({
  ...commonColumnProperties,
  ...column
}));
