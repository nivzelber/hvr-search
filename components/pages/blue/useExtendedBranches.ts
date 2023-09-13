import { useMemo } from "react";

import { useUserStore } from "../../../store/userStore";
import { Location } from "../../../types/location";
import { isGeolocation, metersBetween } from "../../../utils/location";

import { Branch, ExtendedBranch } from "./branch";

export const useExtendedBranches = (branches: Branch[]): ExtendedBranch[] => {
  const { geolocation } = useUserStore();

  return useMemo(() => {
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
  }, [geolocation, branches]);
};
