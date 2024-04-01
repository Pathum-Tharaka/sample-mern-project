import React from "react";
import "./App.css";
import Home from "./Components/home/home";
import { Route, Routes } from "react-router-dom";
import addUser from "./Components/Add User/AddUser";
import userDetails from "./Components/User Details/User Details";



function App() {
  return (
    <div>
     
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adduser" element={<addUser />} />
          <Route path="/userDetails" element={<userDetails/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
