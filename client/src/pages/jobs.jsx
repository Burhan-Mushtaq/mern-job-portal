import { Link } from "react-router-dom"

function Jobs () {
    return(
        <div>
            <Link to="/login">Login</Link> | {" "}
            <Link to="/register">Register</Link> | {" "}
            <Link to="/create-job">Create Job</Link>
        </div>
    );
};

export default Jobs;