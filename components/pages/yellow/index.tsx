import { GridRowsProp } from "@mui/x-data-grid";

import { useSearchStore } from "../../../store/searchStore";
import { branchesFilter } from "../../../utils/array/filter";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface YellowCardProps {
  branches: Branch[];
}
export const YellowCard = ({ branches }: YellowCardProps) => {
  const search = useSearchStore(state => state.search);

  const rows: GridRowsProp<Branch> = branches.filter(
    branchesFilter<Branch>(search, ["company", "company_category", "f_name"])
  );

  return <BranchesTable rows={rows} columns={columns} />;
};
