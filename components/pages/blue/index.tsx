import { GridRowsProp } from "@mui/x-data-grid";

import { useUserStore } from "../../../store/userStore";
import { Location } from "../../../types/location";
import { metersBetween } from "../../../utils/location";
import { BranchesTable } from "../../branches-table";

import { Branch, ExtendedBranch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => {
  const { geolocation } = useUserStore();
  let rows: GridRowsProp<ExtendedBranch> = branches;

  // for some reason this is the only working way for null checking GeoPosition objects
  if (geolocation?.coords !== undefined) {
    const userLocation: Location = {
      longitude: geolocation.coords.longitude,
      latitude: geolocation.coords.latitude
    };

    rows = branches.map(branch => {
      const branchLocation: Location = {
        longitude: Number(branch.longitude),
        latitude: Number(branch.latitude)
      };
      return {
        ...branch,
        distanceFromUser: metersBetween(userLocation, branchLocation)
      };
    });
  }

  return (
    <BranchesTable
      rows={rows}
      columns={columns}
      initialState={{
        sorting: {
          sortModel: [{ field: "distanceFromUser", sort: "asc" }],
        },
        columns: {
          columnVisibilityModel: {
            distanceFromUser: false
          }
        }
      }}
    />
  );
};
