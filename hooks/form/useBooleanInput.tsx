import { FormControlLabel, Switch } from "@mui/material";
import { useState, ChangeEvent } from "react";

export const useBooleanInput = (initialState: boolean, label: string ) => {
    const [ value, setValue ] = useState(initialState);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
    };

    const Input = <FormControlLabel control= { <Switch checked={value} onChange={handleChange} />} label={label} />

    return [ value, Input ];
};
