import { Switch, Route } from "react-router-dom";
import { ChoosePantsScreen } from "../Screens/ChooseScreens/ChoosePantsScreen";
import { ChooseShirtsScreen } from "../Screens/ChooseScreens/ChooseShirtsScreen";
import { ChooseShoeScreen } from "../Screens/ChooseScreens/ChooseShoeScreen";
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