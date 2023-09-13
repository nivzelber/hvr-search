import { useMemo } from "react";

import { useUserStore } from "../../../store/userStore";
import { Location } from "../../../types/location";
import { metersBetween } from "../../../utils/location";
import { BranchesTable } from "../../branches-table";

import { Branch } from "./branch";
import { columns } from "./table-defs";

interface BlueCardProps {
  branches: Branch[];
}

export const BlueCard = ({ branches }: BlueCardProps) => {
  const { geolocation } = useUserStore();

  const rows = useMemo(() => {
    // for some reason this is the only working way for null checking GeoPosition objects
    if (geolocation?.coords === undefined) return branches;
    console.log(geolocation);

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

  return (
    <BranchesTable
      rows={rows}
      columns={columns}
      initialState={{
        sorting: {
          sortModel: [{ field: "distanceFromUser", sort: "asc" }]
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
