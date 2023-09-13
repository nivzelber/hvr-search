import { useEffect } from "react";

import { useUserStore } from "../../store/userStore";

export const UserDetails = () => {
  const { setGeolocation } = useUserStore();
  useEffect(() => {
    if (!navigator.geolocation) return;
    /**
     * What if the user is currently moving?
     * Since we don't want the entire website to change due to
     * user moving and new data coming in, this is currently only done one
     */
    // TODO: log failure to get geolocation information
    navigator.geolocation.getCurrentPosition(setGeolocation);
  }, []);

  return <></>;
};
