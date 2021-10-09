import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMentor, setStudent } from "../../Redux/action";
import styles from "./temp.module.css";


export const TML = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
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
        console.log(data);
        axios.post("http://localhost:2367/mentors/login", data)
            .then((res) => {
                console.log(res.data.mentor);
                dispatch(setMentor(res.data.mentor));
            })
            .catch((err) => {
                alert(err);
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div className={styles.cont}>
            <h3>Mentor Login</h3>
            <TextField name="email" onChange={handleChange} className={classes.inps} placeholder="Enter your email"></TextField>
            <TextField name="password" type="password" onChange={handleChange} className={classes.inps} placeholder="Enter your password"></TextField>
            <Button variant="contained" onClick={handleSubmit} className={styles.btnSpl}>Submit</Button>
        </div>
    )
}