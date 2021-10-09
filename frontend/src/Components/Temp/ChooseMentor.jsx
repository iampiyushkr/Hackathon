import { useState } from "react";
import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";



const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]

export const ChooseMentor = () => {
    const [domain, setDomain] = useState();
    
    return (
        <div>
            <TextField name="domain" onChange={(e) => setDomain(e.target.value)} variant="outlined" className={`${classes.inps} ${classes.place}`} label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>

        </div>
    )
}