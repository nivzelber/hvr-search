import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { useSearchStore } from "../store/searchStore";
import { branchesFilter } from "../utils/array/filter";

interface UseBranchesFilterProps<TBranch> {
  branches: TBranch[];
  filterParams: (keyof TBranch)[];
  debounceTimeout?: number;
}

export const useBranchesFilter = <TBranch extends Record<string, any>>({
  branches,
  filterParams,
  debounceTimeout = 300
}: UseBranchesFilterProps<TBranch>) => {
  const search = useSearchStore(state => state.search);
  const [filteredBranches, setFilteredBranches] = useState(branches);

  const debouncedBranchedFilter = useDebouncedCallback(
    search => setFilteredBranches(branches.filter(branchesFilter<TBranch>(search, filterParams))),
    debounceTimeout
  );

  useEffect(() => {
    debouncedBranchedFilter(search);
  }, [search]);

  return filteredBranches;
};
