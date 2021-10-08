import { Switch, Route } from "react-router-dom"
import { Temp } from "../Components/temp"
import Landing from "../Components/Landing/landingPage"

 const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route exact path="/temp">
                <Temp/>
            </Route>
        </Switch>
    )
}

export default Routes