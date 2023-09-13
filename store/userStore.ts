import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  geolocation?: GeolocationPosition;
  setGeolocation: (geolocation: GeolocationPosition) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        setGeolocation: geolocation => set(_state => ({ geolocation }))
      }),
      {
        name: "user"
      }
    )
  )
);
