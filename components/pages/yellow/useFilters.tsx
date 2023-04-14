import { FormGroup } from "@mui/material";
import { useMemo } from "react";

import { useBooleanInput } from "../../../hooks/form/useBooleanInput";
import { useListInput } from "../../../hooks/form/useListInput";

import { Branch } from "./branch";

export const useFilters = (branches: Branch[]) => {
  const [isOnline, IsOnlineInput] = useBooleanInput(false, "מכובד באונליין");
  const [category, CategoryInput] = useListInput<{ company_category: string }>(
    branches,
    "company_category",
    "קטגורייה"
  );

  const filteredBranches = useMemo(() => {
    let filteredBranches = branches;

    if (isOnline) filteredBranches = filteredBranches.filter(branch => branch.is_online === "Y");
    if (category)
      filteredBranches = filteredBranches.filter(branch => branch.company_category === category);

    return filteredBranches;
  }, [branches, category, isOnline]);

  const FiltersForm = (
    <FormGroup sx={{ width: "20em" }}>
      {IsOnlineInput}
      {CategoryInput}
    </FormGroup>
  );

  return { filteredBranches, FiltersForm };
};
