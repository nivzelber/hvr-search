import { Autocomplete, TextField } from "@mui/material";
import uniq from "lodash/uniq";
import { useMemo, useState } from "react";

export const useListInput = <Item extends Record<string, string>>(
  items: Item[],
  key: keyof Item,
  label: string
): [string | null, JSX.Element] => {
  const options = useMemo(
    () => uniq(items.flatMap(item => item[key].split(","))).sort(),
    [items, key]
  );

  const [value, setValue] = useState<string | null>(null);
  const handleCategoryChange = (_: unknown, newValue: string | null) => {
    setValue(newValue);
  };

  const Input = (
    <Autocomplete
      onChange={handleCategoryChange}
      options={options}
      value={value}
      renderInput={props => <TextField {...props} label={label} sx={{ padding: "0.5em" }} />}
    />
  );

  return [value, Input];
};
