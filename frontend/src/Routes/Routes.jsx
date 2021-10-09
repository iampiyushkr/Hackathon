import { Switch, Route } from "react-router-dom"
import Landing from "../Components/Landing/landingPage"
import Socket from "../Components/socket/socket"
import Blogs from "../Components/Blogs/Blogs"
import Sockettt from "../Components/socket/socketttt"

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
        </Switch>
    )
}

export default Routes