import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface YellowCardProps {
  rows: Branch[];
}

export const YellowCard = ({ rows }: YellowCardProps) => (
  <BranchesTable
    rows={rows}
    columns={columns}
    initialState={{
      sorting: {
        sortModel: [{ field: "company", sort: "asc" }]
      }
    }}
  />
);
