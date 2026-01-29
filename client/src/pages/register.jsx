import { useState } from "react";
import { useAuth} from "../context/authContext";
import {useNavigate} from "react-router-dom";

function Register () {
    const [name, setName] = useState("");
    const [email ,setEmail] =  useState("");
    const [password , setPassword] = useState("");
    const [role, setRole] = useState("jobseeker");

    const {register} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await register(name, email, password , role);
            navigate("/login");
        }catch{
            alert("Registration failed");
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center ">  
        <div className="w-full max-w-md bg-blue-50 rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-center text-gray-800">
                Create  Account
            </h2>
            <p className="text-center text-gray-500 mt-2">
                Join us and get started
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input type="email"
                         placeholder="you2example.com"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                         required/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input type="password" 
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Register as
                    </label>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio"
                                name="role" 
                                value="jobseeker"
                                checked={role === "jobseeker"}
                                onChange={(e) => setRole(e.target.value)}
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500"/>
                            <span className="text-gray-700 font-semibold">Job Seeker</span>    
                        </label>

                         <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio"
                                name="role" 
                                value="recruiter"
                                checked={role === "recruiter"}
                                onChange={(e) => setRole(e.target.value)}
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500"/>
                            <span className="text-gray-700 font-semibold">Recruiter</span>    
                        </label>

                    </div>
                </div>

                <button type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Register
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Login
                    </span>
                </p>
            </form>
        </div>
        </div>
    )
}
export default Register;