import { useBranchesFilter } from "../../../hooks/useBranchesFilter";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => {
  const rows = useBranchesFilter({
    branches,
    filterParams: ["name", "desc", "city", "address", "f_name"]
  });

  return (
    <BranchesTable
      rows={rows}
      columns={columns}
      initialState={{
        sorting: {
          sortModel: [{ field: "name", sort: "asc" }]
        }
      }}
    />
  );
};
