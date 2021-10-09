import { Box, TextField, makeStyles, MenuItem, Checkbox, Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentMentor } from "../../Redux/action";
import { StudentDashboard } from "./StudentDashboard";
import styles from "./temp.module.css";
import Paper from '@mui/material/Paper';


const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]


export const TempHomeStudent = () => {
    const [dashboard, setDashboard] = useState(true);
    const [chats, setChats] = useState(false);
    const [guide, setGuide] = useState(false);
    const [account,setAccount]=useState(false)
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
        // setGuide(true);
        // setChats(false)
        // setDashboard(false);
        //setAccount(false)
    }
    const showAccount=()=>{
        setChats(false)
        setDashboard(false);
        setGuide(false);
        setAccount(true)
    }
    return (
        <div style={{display:"flex", width:"95%"}}>
            <div className={styles.dash}>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:dashboard?"blue":"rgb(12,12,12)"}} onClick={showDashboard}>Dashboard</div>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:guide?"blue":"rgb(12,12,12)"}} onClick={showGuide}>Guide</div>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:chats?"blue":"rgb(12,12,12)"}} onClick={showChats}>Chats</div>
                <div style={{ cursor: "pointer", fontSize: "21px", fontWeight: "600" }} onClick={showAccount}>Account</div>
            </div>
            {dashboard && <div className={styles.subDash}>
                <h2 style={{marginBottom:"79px"}}>Chat with a Mentor</h2>
                <TextField style={{ width: "580px", marginRight:"70px" }} name="domain" onChange={(e) => setDomain(e.target.value)} variant="outlined" label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
                <Button className={styles.btnSpl} variant="contained" onClick={handleClick}>Start Conversation with a mentor</Button>
            </div>}
            {chats && <div className={styles.subDash}>
            
            </div>}
            {guide && <div>
            
            </div>}
            {account&&<div>
                <Paper elevation={3}  className={styles.studentprofil} >
                 <div className={styles.studentdiv}>
                 <div className={styles.studentleft}>
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="error"/>
                   
                 </div>
                 <div style={{width:"2px",height:"250px",backgroundColor:"gray",marginLeft:"10%"}}></div>
                 <div className={styles.studentright}>
                     <div>
                     <h3>Name :</h3>
                     <p>{student.name}</p>
                     </div>
                     
                     <div>
                     <h3>Email :</h3>
                     <p>{student.email}</p>
                     </div>
                     <div>
                     <h3>Language known :</h3>
                     <p>Hindi</p>
                     </div>
                     <div>
                     
                   
                     </div>
                    
                 </div>

                 </div>
             </Paper>

                </div>}
        </div>
    )
}