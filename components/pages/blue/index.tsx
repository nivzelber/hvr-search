import { BranchesTable } from "../../branches-table";
import { Branch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  rows: Branch[];
}

export const BlueCard = ({ rows }: BlueCardProps) => 
    <BranchesTable
      rows={rows}
      columns={columns}
      initialState={{
        sorting: {
          sortModel: [{ field: "name", sort: "asc" }]
        }
      }}
    />;