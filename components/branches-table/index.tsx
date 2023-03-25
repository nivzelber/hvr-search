import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

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
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} initialState={initialState} rowHeight={100} />
    </div>
  );
}

export * from "./branch-link";
