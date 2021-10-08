import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentMentor } from "../../Redux/action";


const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]


export const TempHomeStudent = () => {
    const history = useHistory();
    const student = useSelector(state => state.student);
    const studentLoggedIn = useSelector(state => state.studentLoggedIn);
    if (!studentLoggedIn) {
        history.push("/studentlogin");
    }
    const dispatch = useDispatch();
    const [domain, setDomain] = useState();
    const handleClick = () => {
        console.log(student, domain)
        axios.get(`http://localhost:2367/mentors/findmentor?studentid=${student._id}&domain=${domain}`)
            .then((res) => {
                console.log(res.data.mentor);
                dispatch(setCurrentMentor(res.data.mentor));
                history.push("/chatwithmentor");
            })
            .catch((err) => {
                alert(err);
            })
    }
    return (
        <div>
            <TextField style={{width:"180px"}} name="domain" onChange={(e) => setDomain(e.target.value)} variant="outlined" label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
            <Button variant="contained" onClick={handleClick}>Start Conversation with a mentor</Button>
        </div>
    )
}