import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setStudent } from "../../Redux/action";
import styles from "./temp.module.css";


export const TSL = () => {
    const history = useHistory();
    const student = useSelector(state => state.student);
    const studentLoggedIn = useSelector(state => state.studentLoggedIn);
    if (studentLoggedIn) {
        history.push("/temphomestudent");
    }
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
        axios.post("http://localhost:2367/students/login", data)
            .then((res) => {
                console.log(res.data.student);
                dispatch(setStudent(res.data.student));
                history.push("/temphomestudent");
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
            <h3>Student Login</h3>
            <TextField name="email" onChange={handleChange} className={classes.inps} placeholder="Enter your email"></TextField>
            <TextField name="password" type="password" onChange={handleChange} className={classes.inps} placeholder="Enter your password"></TextField>
            <Button className={styles.btnSpl} variant="contained" onClick={handleSubmit} >Submit</Button>
            <div className={styles.extraDiv}>
                <p>Already have an account?</p>
                <button onClick={() => history.push("/studentsignup")}>Signup</button>
            </div>
        </div>
    )
}