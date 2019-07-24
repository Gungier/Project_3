import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";


function Nav(props) {
  return (
    <div>
    <div id="nav">
      
      <Link className="btn" to="/" id="brandButton">
      CryptoTracker
      </Link>&nbsp;
      <Link className="btn" to="/resources" id="resourcesButton">
          Resources
      </Link>&nbsp;
      <Link className="btn" to="/about" id="aboutButton">
          About
      </Link>&nbsp;
      <Link className="btn" to="/dashboard" id="dashButton" hidden={!props.user} user={props.user}>
          Dashboard
      </Link>&nbsp;
      <Link className="btn" to="" id="signUpButton" data-toggle="modal" data-target="#modalRegisterForm" hidden={props.user} user={props.user}>
          Sign Up
      </Link>&nbsp;
      <Link className="btn" to="" id="loginButton" data-toggle="modal" data-target="#modalLoginForm" id="loginButton" hidden={props.user} user={props.user}>
          Login
      </Link>&nbsp;
      <Link className="btn" to="" id="logoutButton" hidden={!props.user} user={props.user}>
          Logout
      </Link>&nbsp;


      </div>

      <Login setUser={props.setUser}  user={props.user} history={props.history}>

      </Login>
      
      <SignUp setUser={props.setUser}  user={props.user} history={props.history}>

      </SignUp>

</div>
  )}

export default Nav;