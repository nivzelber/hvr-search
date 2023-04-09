import { useMemo } from "react";
import { useDebounce } from "use-debounce";

import { useSearchStore } from "../store/searchStore";
import { branchesFilter } from "../utils/array/filter";

interface useBranchesSearchProps<TBranch> {
  branches: TBranch[];
  filterParams: (keyof TBranch)[];
  debounceTimeout?: number;
}

export const useBranchesSearch = <TBranch extends Record<string, any>>({
  branches,
  filterParams,
  debounceTimeout = 300
}: useBranchesSearchProps<TBranch>) => {
  const search = useSearchStore(state => state.search);

  const [debouncedSearch] = useDebounce(search, debounceTimeout);

  const filteredBranches = useMemo(
    () => branches.filter(branchesFilter(debouncedSearch, filterParams)),
    [branches, filterParams, debouncedSearch]
  );

  return filteredBranches;
};