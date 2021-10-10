import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import "./profile.css"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const carrier = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
export default function StudentProfile(){

    const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

    return<div>
             <Paper elevation={3}  className="studentprofil" >
                 <div className="studentdiv">
                 <div className="studentleft">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="error"/>
                    <Button style={{fontSize:"12px",marginBottom:"10px",marginLeft:"15px"}} variant="contained">Upload image</Button>
                 </div>
                 <div style={{width:"2px",height:"305px",backgroundColor:"gray",marginLeft:"10%"}}></div>
                 <div className="studentright">
                     <div>
                     <h3>Name :</h3>
                     <p>Ram</p>
                     </div>
                     <div>
                     <h3>Age :</h3>
                     <p>21</p>
                     </div>
                     <div>
                     <h3>Email :</h3>
                     <p>Ramji@gmail.com</p>
                     </div>
                     <div>
                     <h3>Language known :</h3>
                     <p>Hindi</p>
                     </div>
                     <div>
                     <h3>Check carrier option :</h3>
                     <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {carrier.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                     </div>
                    
                 </div>

                 </div>
             </Paper>
    </div>
}