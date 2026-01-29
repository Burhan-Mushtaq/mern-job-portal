import { Link } from "react-router-dom";
import {useAuth} from "../context/authContext";

function Jobs () {
    const {user , logout} = useAuth();

    return(
        <div>
            <h1>Jobs Page</h1>

            {user ? (
                <>
                    <p>Welome , {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ): (
                <>
                <p>You are not logged in</p>
                <Link to="/login">Login</Link> | {" "}
                <Link to="/register">Register</Link> | {" "}
                <br /><br />
                </>
            
            )}
        </div>
    );
};

export default Jobs;