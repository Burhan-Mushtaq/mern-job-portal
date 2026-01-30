import {Link} from "react-router-dom";
import {useAuth} from "../context/authContext";

const Navbar = () =>{
    const {user , logout }= useAuth();

    return(
        <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
            <Link to="/home" className="text-xl font-bold">
            MERN Jobs
            </Link>

            <div className="flex gap-4 items-center">
                <Link to="/home" className="hover:text-gray-300">
                Jobs
                </Link>

            {!user && (
                <>
                    <Link to="/login" className="hover:text-gray-300">Login</Link>
                    <Link to="/register" className="bg-blue-600 px-4 py-1 rounded">Register</Link>
                </>
            )}

            {user && (
                <>
                {user.role === "recruiter" &&(
                    <Link to="/create-job" className="hover:text-gray-300">Create Job</Link>
                )}

                <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                   Logout
                </button>

                </>
            )}

            </div>
        </nav>

    )

}

export default Navbar;