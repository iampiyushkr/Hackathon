import { Button } from "@material-ui/core"
import { Paper } from "@mui/material"
import "./profile.css"
export default function Mentor(mentorDetail,handleChat){
    console.log("good",mentorDetail.mentorDetail[0].name)
        // const [loading,setLoading]=useState
        
    return<div>
            <Paper elevation={3}  className="mentorDetail" >
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
                    <p>Name : {mentorDetail.mentorDetail[0].name}</p>
                    <p>{mentorDetail.mentorDetail[0].name}</p>
                    {mentorDetail.mentorDetail[0].languages.map(e=><p>{e}</p>)}
                    <Button varient="secondary" oncClick={handleChat}>Start chat</Button>
            </Paper>
            
        </div>
}