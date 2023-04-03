import { useBranchesFilter } from "../../../hooks/useBranchesFilter";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface YellowCardProps {
  branches: Branch[];
}

export const YellowCard = ({ branches }: YellowCardProps) => {
  const rows = useBranchesFilter({
    branches,
    filterParams: ["company", "company_category", "search_words", "f_name"]
  });

  return <BranchesTable rows={rows} columns={columns} />;
};
