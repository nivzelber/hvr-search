import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => (
  <BranchesTable
    rows={branches}
    columns={columns}
    initialState={{
      sorting: {
        sortModel: [{ field: "name", sort: "asc" }]
      }
    }}
  />
);
