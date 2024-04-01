import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-li">
          <Link to="/home" className="home-link-a">
            <h3>Home</h3>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/AddUser" className="home-link-b">
            <h3>Add User</h3>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/UserDetails" className="home-link">
            <h3>User Details</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
