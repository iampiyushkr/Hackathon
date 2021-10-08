import { Switch, Route } from "react-router-dom"
import { ChatWithMentor } from "../Components/Temp/ChatWithMentor"
import { TSL } from "../Components/Temp/temp"
import { TempHomeStudent } from "../Components/Temp/TempHomeStudent"
import { TML } from "../Components/Temp/tempMentor"
import { TMS } from "../Components/Temp/tempMentorSignup"
import { TSS } from "../Components/Temp/tempStudentSignup"


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/temp">
                <TSL/>
                <TML />
                <TSS />
                <TMS/>
            </Route>
            <Route exact path="/temphomestudent">
                <TempHomeStudent/>
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
        </Switch>
    )
}