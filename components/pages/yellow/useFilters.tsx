import { ChangeEvent, useMemo, useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

import { Branch } from "./branch";

export const useFilters = (branches: Branch[]) => {
    const [isOnline, setIsOnline] = useState(false);
    const handleIsOnlineChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsOnline(event.target.checked);
    };

    const filteredBranches = useMemo(
        () => {
            let filteredBranches = branches; 

            if (isOnline) filteredBranches = filteredBranches.filter(branch => branch.is_online === "Y");
            
            return filteredBranches;
        },
        [branches, isOnline]
    );

    const FiltersForm = (
        <FormGroup sx={{width:"13em"}}>
            <FormControlLabel control= {<Switch checked={isOnline} onChange={handleIsOnlineChange} />} label="מכובד באונליין" />
        </FormGroup>
    );

    return { filteredBranches, FiltersForm };
};