import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";

import Navbar from "./components/navbar";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import CreateJob from "./pages/createJob";
import ProtectedRoutes from "./routes/protectedRoute";
import PublicRoutes from "./routes/publicRoute";
import RecruiterRoutes from "./routes/recruiterRoute";

function App() {
  return (
      <BrowserRouter>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

         <Routes>
            <Route path="/home"
             element={
                <ProtectedRoutes>
                  <Home />
               </ProtectedRoutes>
             }/>    

         <Route path="/login" 
            element={
               <PublicRoutes>
                  <Login />
               </PublicRoutes>
                  }/>   

            <Route path="/register" element={<Register />} />   

            <Route path="/create-job" 
            element={
               <RecruiterRoutes>
                  < CreateJob />
               </RecruiterRoutes>
               
                }/>     
         </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
