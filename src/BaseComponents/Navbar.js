import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <h5>NAVBAR</h5>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/shoes">shoes</Link></li>
                <li><Link to="/pants">pants</Link></li>
                <li><Link to="/shirts">shirts</Link></li>
            </ul>
            <hr />
        </div>
    );
};