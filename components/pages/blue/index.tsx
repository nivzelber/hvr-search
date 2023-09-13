import { GridSortModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import { useUserStore } from "../../../store/userStore";
import { isGeolocation } from "../../../utils/location";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { defaultSortingModel } from "./consts";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => {
  const { geolocation } = useUserStore();

  const [sortModel, setSortModel] = useState<GridSortModel>(defaultSortingModel);

  useEffect(() => {
    if (!isGeolocation(geolocation)) {
      setSortModel(defaultSortingModel);
    } else {
      setSortModel([
        {
          field: "distanceFromUser",
          sort: "asc"
        }
      ]);
    }
  }, [geolocation]);

  return (
    <BranchesTable
      rows={branches}
      columns={columns}
      sortModel={sortModel}
      initialState={{
        columns: {
          columnVisibilityModel: {
            distanceFromUser: false
          }
        }
      }}
    />
  );
};
