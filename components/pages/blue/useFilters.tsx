import { ChangeEvent, useMemo, useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

import { Branch } from "./branch";

export const useFilters = (branches: Branch[]) => {
    const [delivery, setDelivery] = useState(false);
    const handleDeliveryChange = (event: ChangeEvent<HTMLInputElement>) => {
      setDelivery(event.target.checked);
    };

    const [kosher, setKosher] = useState(false);
    const handleKosherChange = (event: ChangeEvent<HTMLInputElement>) => {
      setKosher(event.target.checked);
    };

    const filteredBranches = useMemo(
        () => {
            let filteredBranches = branches; 

            if (delivery) filteredBranches = filteredBranches.filter(branch => branch.f_is_delivery === "Y");
            if (kosher) filteredBranches = filteredBranches.filter(branch => branch.f_kosher === "Y");
            
            return filteredBranches;
        },
        [branches, delivery, kosher]
    );

    const FiltersForm = (
        <FormGroup sx={{width:"10em"}}>
            <FormControlLabel control= {<Switch checked={kosher} onChange={handleKosherChange} />} label="כשר" />
            <FormControlLabel control={<Switch checked={delivery} onChange={handleDeliveryChange}/>} label="משלוחים" />
        </FormGroup>
    );

    return { filteredBranches, FiltersForm };
};