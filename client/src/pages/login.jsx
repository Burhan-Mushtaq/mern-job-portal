import { useState } from "react";
import { useAuth } from "../context/authContext";
import {useNavigate} from "react-router-dom";


function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await login(email, password);
            navigate("/home");
        }catch(err){
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center ">
            <div className="w-full max-w-md bg-blue-50 rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4" >

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label  className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                        <button type="submit"
                         className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Login
                         </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Register
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;