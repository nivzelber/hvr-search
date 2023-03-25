import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";

interface BranchesTableProps<T extends GridValidRowModel> {
  rows: GridRowsProp<T>;
  columns: GridColDef<T>[];
}

export function BranchesTable<T extends GridValidRowModel>({
  rows,
  columns
}: BranchesTableProps<T>) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
