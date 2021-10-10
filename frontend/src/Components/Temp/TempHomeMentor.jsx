import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentMentor } from "../../Redux/action";
import { StudentDashboard } from "./StudentDashboard";
import styles from "./temp.module.css";
import Socket from "../socket/socket";
import { Paper } from "@mui/material"
import { Link } from "react-router-dom"


const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]


export const TempHomeMentor = () => {
    const [dashboard, setDashboard] = useState(true);
    const [chats, setChats] = useState(false);
    const [guide, setGuide] = useState(false);
    const [account,setAccount]=useState(true)
    const history = useHistory();
    const student = useSelector(state => state.mentor);
    const mentorLoggedIn = useSelector(state => state.mentorLoggedIn);
    if (!mentorLoggedIn) {
        history.push("/mentorlogin");
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
    const showDashboard = () => {
        setDashboard(true);
        setChats(false);
        setGuide(false);
        setAccount(false)
    }
    const showChats = () => {
        setChats(true)
        setDashboard(false);
        setGuide(false);
        setAccount(false)
    }
    const showGuide = () => {
        setGuide(true);
        setChats(false)
        setDashboard(false);
        setAccount(false)
    }
    const showAccount=()=>{
        setChats(false)
        setDashboard(false);
        setGuide(false);
        setAccount(true)
        console.log(student)
    }
    return (
        <div style={{display:"flex", width:"95%"}}>
            <div className={styles.dash}>
                {/* <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:dashboard?"blue":"rgb(12,12,12)"}} onClick={showDashboard}>Dashboard</div> */}
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:guide?"blue":"rgb(12,12,12)"}} onClick={showGuide}>Video</div>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:chats?"blue":"rgb(12,12,12)"}} onClick={showChats}>Chats</div>
                <div style={{ cursor: "pointer", fontSize: "21px", fontWeight: "600", color:account?"blue":"rgb(12,12,12)" }} onClick={showAccount}>Account</div>
            </div>
            {/* {dashboard && <div className={styles.subDash}>
                <h2 style={{marginBottom:"79px"}}>Chat with a Mentor</h2>
                <TextField style={{ width: "580px", marginRight:"70px" }} name="domain" onChange={(e) => setDomain(e.target.value)} variant="outlined" label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
                <Button className={styles.btnSpl} variant="contained" onClick={handleClick}>Start Conversation with a mentor</Button>
            </div>} */}
            {chats && <div className={styles.subDash}>
                <Socket/>
            </div>}
            {guide && <div>
            
            </div>}
            {account && <div>
                <div>
            <Paper elevation={3}  className={styles.mentorDetail} >
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
                    <p>Name : <span>{student.name}</span> </p>
                    <p>Email : <span>{student.email}</span></p>
                    <p>Domain : <span>{student.domain}</span> </p>
                   <p>Language : {student.languages.map(e=><span>{e}</span>)}</p>
                   
            </Paper>
            
        </div>
            </div>}
        </div>
    )
}