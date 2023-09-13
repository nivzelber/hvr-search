import { Logger } from "next-axiom";
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
        setSearch: search => {
          const logger = new Logger();
          logger.info("SEARCH", { search, pathname: window.location.pathname });
          return set(_state => ({ search }));
        },
        clearSearch: () => set(_state => ({ search: "" }))
      }),
      {
        name: "search"
      }
    )
  )
);
