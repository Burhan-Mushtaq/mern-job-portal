import {Navigate} from "react-router-dom";
import {useAuth} from "../context/authContext";

const PublicRoutes = ({ children }) =>{
    const {user, loading} = useAuth();

    if(loading) {
        return <div>Loading...</div>
    }

    if(user){
        return <Navigate to="/jobs" />
    }

    return children;
}

export default PublicRoutes;