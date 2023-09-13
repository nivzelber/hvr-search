import { GridSortModel } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";

import { useUserStore } from "../../../store/userStore";
import { Location } from "../../../types/location";
import { isGeolocation, metersBetween } from "../../../utils/location";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { defaultSortingModel } from "./consts";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => {
  const { geolocation } = useUserStore();

  const rows = useMemo(() => {
    if (!isGeolocation(geolocation)) return branches;

    const userLocation: Location = {
      longitude: geolocation.coords.longitude,
      latitude: geolocation.coords.latitude
    };

    return branches.map(branch => {
      const branchLocation: Location = {
        longitude: Number(branch.longitude),
        latitude: Number(branch.latitude)
      };
      return {
        ...branch,
        distanceFromUser: metersBetween(userLocation, branchLocation)
      };
    });
  }, [geolocation]);

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
      rows={rows}
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
