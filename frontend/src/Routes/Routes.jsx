import { Switch, Route } from "react-router-dom"
import { Temp } from "../Components/temp"
import Landing from "../Components/Landing/landingPage"
import Socket from "../Components/socket/socket"
import Blogs from "../Components/Blogs/Blogs"

 const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route exact path="/temp">
                <Temp/>
            </Route>
            <Route exact path="/socket">
                <Socket/>
            </Route>
            <Route exact path="/blogs">
                <Blogs/>
            </Route>
        </Switch>
    )
}

export default Routes