import { Link } from "react-router-dom";
import { CustomList } from "./CustomList";
import { H1 } from "./Text";
import { View } from "./View";

export const NavBar = () => {
    return (
        <View>
            <H1 style={styles.mainHeader}>MoonSite Wardrobe App</H1>
            <CustomList style={styles.navigationContainer}>
                <Link to="/">home</Link>
                <Link to="/shoes">select shoes</Link>
                <Link to="/pants">select pants</Link>
                <Link to="/shirts">select shirts</Link>
            </CustomList>
        </View>
    );
};

const styles = {
    mainHeader: {
        textAlign: 'center',
    },
    subHeader: {
        textAlign: 'center',
    },
    navigationContainer: {
        listContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }
    },
}