import { Switch, Route } from "react-router-dom"
import Landing from "../Components/Landing/landingPage"
import Socket from "../Components/socket/socket"
import Blogs from "../Components/Blogs/Blogs"
import Sockettt from "../Components/socket/socketttt"
import { ChatWithMentor } from "../Components/Temp/ChatWithMentor"
import { MentorDashboard } from "../Components/Temp/MentorDashboard"
import { MentorIntro } from "../Components/Temp/MentorIntro"
import { StudentDashboard } from "../Components/Temp/StudentDashboard"
import { TSL } from "../Components/Temp/temp"
import { TempHomeMentor } from "../Components/Temp/TempHomeMentor"
import { TempHomeStudent } from "../Components/Temp/TempHomeStudent"
import { TML } from "../Components/Temp/tempMentor"
import { TMS } from "../Components/Temp/tempMentorSignup"
import { TSS } from "../Components/Temp/tempStudentSignup"
import Webrtc from "../Components/webRTC/webrtc"

 const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route exact path="/socket">
                <Socket/>
            </Route>
            <Route exact path="/sockettt">
                <Sockettt/>
            </Route>
            <Route exact path="/blogs">
                <Blogs/>
            </Route>
            <Route exact path="/temp">
                <TSL/>
                <TML />
                <TSS />
                <TMS/>
            </Route>
            <Route exact path="/temphomestudent">
                <TempHomeStudent/>
            </Route>
            <Route exact path="/temphomementor">
                <TempHomeMentor/>
            </Route>
            <Route exact path="/mentorintro">
                <MentorIntro/>
            </Route>
            <Route exact path="/chatwithmentor">
                <ChatWithMentor/>
            </Route>
            <Route exact path="/studentlogin">
                <TSL/>
            </Route>
            <Route exact path="/studentsignup">
                <TSS/>
            </Route>
            <Route exact path="/mentorlogin">
                <TML/>
            </Route>
            <Route exact path="/mentorsignup">
                <TMS/>
            </Route>
            <Route exact path="/webrtc">
                <Webrtc/>
            </Route>
            {/* <Route exact path="/studentdashboard">
                <StudentDashboard/>
            </Route>
            <Route exact path="/mentordashboard">
                <MentorDashboard/>
            </Route> */}
        </Switch>
    )
}

export default Routes