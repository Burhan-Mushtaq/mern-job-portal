import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Jobs from "./pages/jobs";
import CreateJob from "./pages/createJob";

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Jobs />}/>    
            <Route path="/login" element={<Login />} />        
            <Route path="/register" element={<Register />} />   
            <Route path="/create-job" element={< CreateJob />} />     
         </Routes>
         </BrowserRouter>
  );
}

export default App;
