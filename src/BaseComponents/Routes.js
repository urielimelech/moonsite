import { Switch, Route } from "react-router-dom";
import { ChoosePantsScreen } from "../Screens/ChoosePantsScreen/ChoosePantsScreen";
import { ChooseShirtsScreen } from "../Screens/ChooseShirtsScreen/ChooseShirtsScreen";
import { ChooseShoeScreen } from "../Screens/ChooseShoeScreen/ChooseShoeScreen";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";
import { NavBar } from "./Navbar";
import { View } from "./View";

export const Routes = () => {
    return (
        <View>
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/shoes" component={ChooseShoeScreen} />
                <Route path="/pants" component={ChoosePantsScreen} />
                <Route path="/shirts" component={ChooseShirtsScreen} />
                <Route path="/success" component={ChoosePantsScreen} />
            </Switch>
        </View>
    )
}