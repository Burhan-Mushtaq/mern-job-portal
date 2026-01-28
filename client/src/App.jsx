import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Jobs from "./pages/jobs";
import CreateJob from "./pages/createJob";
import ProtectedRoutes from "./routes/protectedRoute";
import PublicRoutes from "./routes/publicRoute"

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/jobs"
             element={
               <ProtectedRoutes>
                  <Jobs />
               </ProtectedRoutes>
             }/>    

         <Route path="/login" 
            element={
               <PublicRoutes>
                  <Login />
               </PublicRoutes>
                  }/>   

            <Route path="/register" element={<Register />} />   
            <Route path="/create-job" element={< CreateJob />} />     
         </Routes>
         </BrowserRouter>
  );
}

export default App;
