const pruneAsSearchText = (text: string) => text.toLowerCase().replaceAll(/[^א-תa-zA-Z0-9 ]/g, "");

export const branchesFilter =
  <TBranch extends Record<string, any>>(search: string, filterParams: (keyof TBranch)[]) =>
  (branch: TBranch) => {
    const keywords = pruneAsSearchText(search)
      .split(" ")
      .map(keyword => keyword.trim());

    const filterValues = Object.entries(branch)
      .filter(([key, _value]) => filterParams.includes(key))
      .map(([_key, value]) => pruneAsSearchText(value));

    return keywords.every(keyword =>
      filterValues.some(filterValue => filterValue.includes(keyword))
    );
  };
