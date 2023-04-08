import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SearchState {
  search: string;
  setSearch: (search: SearchState["search"]) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      set => ({
        search: "",
        setSearch: search => set(_state => ({ search })),
        clearSearch: () => set(_state => ({ search: "" }))
      }),
      {
        name: "search"
      }
    )
  )
);
