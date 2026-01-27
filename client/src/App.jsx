import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";

function Login(){
  return <h2>Login Page</h2>;
}

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<h1>Home</h1>}/>    
            <Route path="/login" element={<Login />} />        
         </Routes>
         </BrowserRouter>
  );
}

export default App;
