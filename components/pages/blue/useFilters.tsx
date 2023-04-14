import { FormGroup } from "@mui/material";
import { useMemo } from "react";

import { useBooleanInput } from "../../../hooks/form/useBooleanInput";
import { useListInput } from "../../../hooks/form/useListInput";

import { Branch } from "./branch";

export const useFilters = (branches: Branch[]) => {
  const [kosher, KosherInput] = useBooleanInput(false, "כשר");
  const [delivery, DeliveryInput] = useBooleanInput(false, "משלוחים");
  const [category, CategoryInput] = useListInput<{ category: string }>(
    branches,
    "category",
    "קטגורייה"
  );
  const [area, AreaInput] = useListInput<{ area: string }>(branches, "area", "אזור");
  const [city, CityInput] = useListInput<{ city: string }>(branches, "city", "עיר");

  const filteredBranches = useMemo(() => {
    let filteredBranches = branches;

    if (delivery)
      filteredBranches = filteredBranches.filter(branch => branch.f_is_delivery === "Y");
    if (kosher) filteredBranches = filteredBranches.filter(branch => branch.f_kosher === "Y");
    if (category)
      filteredBranches = filteredBranches.filter(branch => branch.category === category);
    if (area) filteredBranches = filteredBranches.filter(branch => branch.area === area);
    if (city) filteredBranches = filteredBranches.filter(branch => branch.city === city);

    return filteredBranches;
  }, [area, branches, category, city, delivery, kosher]);

  const FiltersForm = (
    <FormGroup sx={{ width: "20em" }}>
      {KosherInput}
      {DeliveryInput}
      {CategoryInput}
      {AreaInput}
      {CityInput}
    </FormGroup>
  );

  return { filteredBranches, FiltersForm };
};
