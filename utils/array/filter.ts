const pruneAsSearchText = (text: string) => text.toLowerCase().replaceAll(/[^א-תa-zA-Z0-9 ]/g, "");

export const branchesFilter = <TBranch extends Record<string, any>>(
  search: string,
  filterParams: (keyof TBranch)[]
) => {
  const keywords = pruneAsSearchText(search)
    .split(" ")
    .map(keyword => keyword.trim());

  return (branch: TBranch) => {
    /**
     * There are ways to optimize this filter, as it does basically the same thing
     * every new search. A cache per (branch + filterParams) can be added.
     * However, after testing, the optimization is not needed as this is not the
     * "heavy" part of the operation
     */
    const filterValues = Object.entries(branch)
      .filter(([key, _value]) => filterParams.includes(key))
      .map(([_key, value]) => pruneAsSearchText(value));

    return keywords.every(keyword =>
      filterValues.some(filterValue => filterValue.includes(keyword))
    );
  };
};
