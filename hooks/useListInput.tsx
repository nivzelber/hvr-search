import { Autocomplete, TextField } from "@mui/material";
import { uniq } from "lodash";
import { useState, useMemo } from "react";

export const useListInput = <TBranch extends Record<string, string>>(branches: TBranch[], key: keyof TBranch, label: string ) => {
  const options = useMemo(
        () => uniq(branches.map(branch => branch[key])).sort(),
        [branches, key]
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
            renderInput={(params) => <TextField {...params} label={label} sx={{padding:"0.5em"}}/>}
        />
    )

    return [ value, Input ];
};
