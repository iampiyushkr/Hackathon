import { Box, TextField, makeStyles, MenuItem, Checkbox } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentMentor } from "../../Redux/action";
import { StudentDashboard } from "./StudentDashboard";
import Socket from "../socket/socket";
import styles from "./temp.module.css";
import Paper from '@mui/material/Paper';
import Mentor from "../Profile/mentorDetail";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Webrtc from "../webRTC/webrtc";
import { Link } from "react-router-dom"


const domains = ["Art", "ML/AI", "Programming/Tech", "Political Science", "Law", "Medical", "Dental",
    "Mechanical Engineering", "Civil Engineering", "Aeronautical Engineering", "Civil Services"
]


export const TempHomeStudent = () => {
    const [dashboard, setDashboard] = useState(true);
    const [chats, setChats] = useState(false);
    const [guide, setGuide] = useState(false);
    const [account,setAccount]=useState(false)
    const [carrier,setCarrier]=useState(false)
    const [loading,setLoading]=useState(false)
    const [socket1,setSocket1]=useState(false)
    const [carrierDetail,setCarrierDetail]=useState(false)
    const [mentorDetail1, setMentorDetail1] = useState(false)
    const [webRtc1 , setWebrtc1] = useState(false)
    const [mentor,setMentor]=useState([])
     const [mentorDetail,setMentorDetail]=useState([])
    const history = useHistory();
    const student = useSelector(state => state.student);
    const studentLoggedIn = useSelector(state => state.studentLoggedIn);
    if (!studentLoggedIn) {
        history.push("/studentlogin");
    }
    const dispatch = useDispatch([]);
    const [domain, setDomain] = useState([]);
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
    // const showChats = () => {
    //     setChats(true)
    //     setDashboard(false);
    //     setGuide(false);
    //     setAccount(false)
    // }
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

    const handleChange = (event) => {
       // console.log(event.target.value)
        

        axios.get("http://localhost:3001/carrier").then((data)=>{
            setLoading(true)
            var newData=data.data.filter(e=>e.name===event.target.value)
            setDomain(newData)
            setCarrier(true)
           console.log(newData)
            
            
        })
        axios.get("http://localhost:2367/mentors").then((data)=>{
          // console.log(data)
            var newData1=data.data.mentor.filter(e=>e.domain===event.target.value)
            setMentor(newData1)
            console.log(newData1)
            setCarrierDetail(true)
            
    })

      };
      const  handleMentor=(id)=>{
         // console.log(id)
         axios.get("http://localhost:2367/mentors").then((data)=>{
              
            
            var newData2=data.data.mentor.filter(e=>e._id===id)
            setMentorDetail(newData2)
            setMentorDetail1(true)
            console.log(mentorDetail,newData2)
            
    })
    setChats(true)
             setDashboard(false);
             setGuide(false);
             setAccount(false)
                
            
      }
      const handleChat=()=>{
        setSocket1(true)
          console.log(socket1)
          setWebrtc1(false)
      }

      const handleVideocall=()=>{
          setSocket1(false)
          setWebrtc1(true)
      }
    return (
        <div style={{display:"flex", width:"95%"}}>
            <div className={styles.dash}>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:dashboard?"blue":"rgb(12,12,12)"}} onClick={showDashboard}>Dashboard</div>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:guide?"blue":"rgb(12,12,12)"}} onClick={showGuide}>Guide</div>
                <div style={{cursor:"pointer", fontSize:"21px", fontWeight:"600", color:chats?"blue":"rgb(12,12,12)"}} >Chats</div>
                <div style={{ cursor: "pointer", fontSize: "21px", fontWeight: "600" }} onClick={showAccount}>Account</div>
            </div>
            {dashboard && <div className={styles.subDash}>
                <h2 style={{marginBottom:"79px"}}>Chat with a Mentor</h2>
                <TextField style={{ width: "580px", marginRight:"70px" }} name="domain" onChange={handleChange} variant="outlined" label="Choose your Domain" select>
                    {domains.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </TextField>
                {/* <Button className={styles.btnSpl} variant="contained" onClick={handleClick}>Start Conversation with a mentor</Button> */}

                {carrier&&<div className={styles.carrier}>
        <div className={styles.carrierleft}>
            {/* we have to map here mentor  */}
        
        {mentor.map(e=><Paper onClick={()=>handleMentor(e._id)} elevation={3}  className={styles.mentorView} >
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
            <p>Name : {e.name}</p>
            <p>Language : {e.languages.map(e=><p>{e}</p>)}</p>
        </Paper>)}
        </div>
        {carrierDetail && <div className={styles.carrierRight}>
         <Paper elevation={3}  className={styles.aboutCarrier} >
            <h2>{domain[0].name}</h2>
            <p>{domain[0].about}</p>
            </Paper>
            <Paper elevation={3}  className={styles.aboutCarrier} >
            <h2>Scope</h2>
            <p>{domain[0].latest.scope}</p>
            </Paper>
            
        </div>}
        
    </div>}
            </div>}
            {chats && <div className={styles.subDash}>
                
            {mentorDetail1 && <div>
            <Paper elevation={3}  className="mentorDetail" >
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
                    <p>Name : {mentorDetail[0].name}</p>
                    <p>{mentorDetail[0].name}</p>
                    {mentorDetail[0].languages.map(e=><p>{e}</p>)}
                    

                    <Button  variant="contained" onClick={handleChat}>Start chat</Button>
                        <Link to="/webrtc"><Button style={{marginLeft:"10px"}} variant="contained" onClick={handleVideocall}>Video call</Button></Link>
                    
            </Paper>
            
        </div>}
                {socket1 && <Socket />}
                
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