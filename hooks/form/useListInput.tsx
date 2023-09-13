import { Autocomplete, TextField } from "@mui/material";
import { uniq } from "lodash";
import { useMemo, useState } from "react";

export const useListInput = <Item extends Record<string, string>>(items: Item[], key: keyof Item, label: string ) => {
  const options = useMemo(
        () => uniq(items.map(item => item[key])).sort(),
        [items, key]
    );

    const [ value, setValue ] = useState<string | null>(null);
    const handleCategoryChange = (_: unknown, newValue: string | null) => {
      setValue(newValue);
    };

    const Input = (
         <Autocomplete
            onChange={handleCategoryChange}
            options={options}
            value={value}
            renderInput={(props) => <TextField {...props} label={label} sx={{padding:"0.5em"}}/>}
        />
    )

    return [ value, Input ];
};
