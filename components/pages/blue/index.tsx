import { GridRowsProp } from "@mui/x-data-grid";

import { useSearchStore } from "../../../store/searchStore";
import { branchesFilter } from "../../../utils/array/filter";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}
export const BlueCard = ({ branches }: BlueCardProps) => {
  const search = useSearchStore(state => state.search);

  const rows: GridRowsProp<Branch> = branches.filter(
    branchesFilter<Branch>(search, ["name", "desc", "city", "address", "f_name"])
  );

  return <BranchesTable rows={rows} columns={columns} />;
};
