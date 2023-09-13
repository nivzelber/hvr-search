import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridSortModel,
  GridValidRowModel
} from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

import { AllAvailableSpaceContainer } from "../../styles/components/layouts";

interface BranchesTableProps<T extends GridValidRowModel> {
  rows: GridRowsProp<T>;
  columns: GridColDef<T>[];
  initialState?: GridInitialStateCommunity;
  sortModel?: GridSortModel;
}

export function BranchesTable<T extends GridValidRowModel>({
  rows,
  columns,
  initialState,
  sortModel
}: BranchesTableProps<T>) {
  return (
    <AllAvailableSpaceContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={initialState}
        getRowHeight={() => "auto"}
        sortModel={sortModel}
      />
    </AllAvailableSpaceContainer>
  );
}

export * from "./branch-link";
export * from "./styles";
