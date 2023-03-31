export const branchesFilter =
  <TBranch extends Record<string, any>>(search: string, filterParams: (keyof TBranch)[]) =>
  (branch: TBranch) => {
    const keywords = search.split(" ").map(keyword => keyword.trim());

    const filterValues = Object.entries(branch)
      .filter(([key, _value]) => filterParams.includes(key))
      .map(([_key, value]) => value);

    return keywords.every(keyword =>
      filterValues.some(filterValue => filterValue.includes(keyword))
    );
  };
