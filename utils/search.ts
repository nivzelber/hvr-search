export const branchesFilter = (search: string, filterParams: string[]) => {
  const keywords = search.split(" ").map(keyword => keyword.trim());
  return keywords.every(keyword => filterParams.some(filterParam => filterParam.includes(keyword)));
};
