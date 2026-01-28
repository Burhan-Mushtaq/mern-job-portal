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
            navigate("/jobs");
        }catch(err){
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Login</h1>            

            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <br /><br />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;