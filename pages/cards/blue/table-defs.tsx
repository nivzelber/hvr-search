import { GridColDef } from "@mui/x-data-grid";
import Image, { ImageLoader } from "next/image";

import { LOGO_BASE_URL } from "./consts";

import type { Branch } from "./branch";

const colSizeProps: Partial<GridColDef<Branch>> = {
  flex: 1
};

const imageLoader: ImageLoader = ({ src }) => LOGO_BASE_URL + src;

export const columns: GridColDef<Branch>[] = [
  {
    field: "img",
    headerName: "",
    flex: 0,
    renderCell: ({ row: branch }) => (
      <Image loader={imageLoader} src={branch.img} alt={branch.name} width={100} height={50} />
    )
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
