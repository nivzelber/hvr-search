import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface YellowCardProps {
  branches: Branch[];
}

export const YellowCard = ({ branches }: YellowCardProps) => (
  <BranchesTable
    rows={branches}
    columns={columns}
    initialState={{
      sorting: {
        sortModel: [{ field: "company", sort: "asc" }]
      }
    }}
  />
);
