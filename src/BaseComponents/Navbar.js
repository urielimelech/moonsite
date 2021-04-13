import { Link } from "react-router-dom";
import { CustomList } from "./CustomList";
import { H1, H5 } from "./Text";
import { View } from "./View";

export const NavBar = () => {
    return (
        <View>
            <H1 style={styles.mainHeader}>MoonSite Wardrobe App</H1>
            <H5>NavBar</H5>
            <CustomList>
                <Link to="/">home</Link>
                <Link to="/shoes">select shoes</Link>
                <Link to="/pants">select pants</Link>
                <Link to="/shirts">select shirts</Link>
            </CustomList>
            <hr />
        </View>
    );
};

const styles = {
    mainHeader: {
        textAlign: 'center'
    }
}