import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import "./login.css";
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/"  element={<SignUp />}/>
          <Route path="/main" element={<Main />} />
          <Route path ="/login" element={<Login/>}/>
        </Routes>
     </div>
      
      
     </Router>
    
  );
}

export default App;
