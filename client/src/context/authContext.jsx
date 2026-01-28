import { Children, createContext, useContext, useState , useEffect } from "react";
import API from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const login = async (email , password) => {
        const res = await API.post("/auth/login" , {email , password});
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");

    };
    useEffect(() =>{
        const token = localStorage.getItem("token");

        if(!token){
            setLoading(false);
            return;
        }

        if(token){
            API.get("/auth/me")
            .then(res => setUser(res.data))
            .catch(()=>{
                localStorage.removeItem("token");
                setUser(null);
            })
            .finally(()=>{setLoading(false);
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{user, login , logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);