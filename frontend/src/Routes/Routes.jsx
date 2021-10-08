import { Switch, Route } from "react-router-dom"
import { Temp } from "../Components/temp"


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/temp">
                <Temp/>
            </Route>
        </Switch>
    )
}