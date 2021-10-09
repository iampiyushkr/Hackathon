import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./temp.module.css";



const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]

export const TMS = () => {
    const history = useHistory();
    const [data, setData] = useState({});
    const [languages, setLanguages] = useState([]);
    const [domain, setDomain] = useState("");
    const useStyles = makeStyles({
        inps: {
            width: "80%",
            margin:"39px"
        },
        btn: {
            margin:"39px"
        }
    })
    const classes = useStyles();
    const handleSubmit = () => {
        const config = { ...data, languages: languages };
        console.log(config);
        axios.post("http://localhost:2367/mentors/signup", config)
            .then((res) => {
                console.log(res.data.mentor);
                history.push("/mentorlogin");
            })
            .catch((err) => {
                alert(err);
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleChecks = (val) => {
        setLanguages([...languages, val]);
        console.log(languages);
    }
    // const handleDomainChange = () => {

    // }
    return (
        <div className={styles.cont}>
            <h3>Mentor Signup</h3>
            <TextField name="name" onChange={handleChange} className={classes.inps} placeholder="Enter your name"></TextField>
            <TextField name="email" onChange={handleChange} className={classes.inps} placeholder="Enter your email"></TextField>
            <TextField name="password" type="password" onChange={handleChange} className={classes.inps} placeholder="Enter your password"></TextField>
            {/* <Button color="primary" variant="outlined" onClick={() => setShow(!show)}>Select the languages that you can converse in:</Button> */}
            <div style={{textAlign:"left", margin:"19px", fontWeight:"600", paddingLeft:"10px"}}>What languages do you speak?</div>
            <div className={styles.checkboxes}>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Hindi") : null} /><div className={styles.flight_div}>Hindi</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("Kannada") : null} /><p className={styles.car_div}>Kannada</p></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Bengali") : null} /><div className={styles.flight_div}>Bengali</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("Telugu") : null} /><p className={styles.car_div}>Telugu</p></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Tamil") : null} /><div className={styles.flight_div}>Tamil</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("Gujarati") : null} /><p className={styles.car_div}>Gujarati</p></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Odiya") : null} /><div className={styles.flight_div}>Odiya</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("Malayalam") : null} /><p className={styles.car_div}>Malayalam</p></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Punjabi") : null} /><div className={styles.flight_div}>Punjabi</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("English") : null} /><p className={styles.car_div}>English</p></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle1} onChange={(e) => e.target.checked ? handleChecks("Marathi") : null} /><div className={styles.flight_div}>Marathi</div></div>
                <div className={styles.checkDiv}><Checkbox className={styles.checkboxStyle2} onChange={(e) => e.target.checked ? handleChecks("Kashmiri") : null} /><p className={styles.car_div}>Kashmiri</p></div>
            </div>
            <TextField name="domain" onChange={handleChange} variant="outlined" className={`${classes.inps} ${classes.place}`} label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
            <Button variant="contained" className={styles.btnSpl} onClick={handleSubmit}>Submit</Button>
            <div className={styles.extraDiv}>
                <p>Already have an account?</p>
                <button onClick={() => history.push("/mentorlogin")}>Login</button>
            </div>
        </div>
    )
}