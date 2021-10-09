import { Paper } from "@mui/material"
import "./profile.css"
export default function Mentor(){
    
    return<div>
            <Paper elevation={3}  className="mentorDetail" >
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
                    <p>Name</p>
                    <p>Qualification</p>
                    <p>About</p>
            </Paper>
            
        </div>
}