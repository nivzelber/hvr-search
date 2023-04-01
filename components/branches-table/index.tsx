import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

import { AllAvailableSpaceContainer } from "../../styles/components/layouts";

interface BranchesTableProps<T extends GridValidRowModel> {
  rows: GridRowsProp<T>;
  columns: GridColDef<T>[];
  initialState?: GridInitialStateCommunity;
}

export function BranchesTable<T extends GridValidRowModel>({
  rows,
  columns,
  initialState
}: BranchesTableProps<T>) {
  return (
    <AllAvailableSpaceContainer>
      <DataGrid rows={rows} columns={columns} initialState={initialState} rowHeight={100} />
    </AllAvailableSpaceContainer>
  );
}

export * from "./branch-link";
export * from "./styles";
