import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { BranchLink, CellWrapper } from "../../../components/branches-table";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";

import { LOGO_BASE_URL } from "./consts";

import type { Branch } from "./branch";
const imageLoader = makeImageLoader(LOGO_BASE_URL);

export const columns: GridColDef<Branch>[] = [
  {
    field: "logo",
    headerName: "",
    flex: 0,
    renderCell: ({ row: branch }) => (
      <BranchLink href={branch.website}>
        <Image
          loader={imageLoader}
          src={branch.logo}
          alt={branch.company}
          width={155}
          height={155}
        />
      </BranchLink>
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
    flex: 1,
    renderCell: ({ row: branch }) => {
      return <p>{branch.is_online === "Y" && "✅"}</p>;
    }
  }
];
