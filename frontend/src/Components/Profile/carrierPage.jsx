import { Paper } from "@mui/material";
import "./profile.css"

export default function Carrier(){
    return <div className="carrier">
        <div className="carrierleft">
            {/* we have to map here mentor  */}
        
        <Paper elevation={3}  className="mentorView" >
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" alt="Error"/>
            <p>Name</p>
            <p>Qualification</p>
        </Paper>
        </div>
        <div className="carrierRight">
        <Paper elevation={3}  className="aboutCarrier" >
            <h2>Headline</h2>
            <p>Some points on particular carrier</p>
            </Paper>
            <Paper elevation={3}  className="aboutCarrier" >
            <h2>Headline</h2>
            <p>Latest news on that carrier</p>
            </Paper>
            
        </div>
        
    </div>
}