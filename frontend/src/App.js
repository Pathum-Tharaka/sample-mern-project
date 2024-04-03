import React from "react";
import "./App.css";
import Home from "./Components/home/home";
import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/Add User/AddUser";
import Userdetails from "./Components/User Details/UserDetails";



function App() {
  return (
    <div>
     
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/UserDetails" element={<Userdetails/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
