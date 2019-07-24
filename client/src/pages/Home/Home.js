import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";


function Home() {
  return (
  <div className="aboutContent">

<h1>CryptoTracker</h1>
          <p>
            Cryptocurrency is amongst the most exciting financial developments to occur over the past decades. No longer tied to governments and precious metals, cryptocurrencies allow companies and entities to create whole new means of measuring value, conducting trade and building wealth. Millions of people around the world are today holding cryptocurrencies as a means of exchange and as an investment. <strong>Cryptocurrency investments can result in the resources needed for the finer things in life like yachts, mansions and luxury automobiles. </strong>
  
            Like any investment, cryptocurrencies promise both reward but also risk. These risks can be mitigated by building knowledge and paying close attention to the markets. At CryptoTracker, we help people do just that: we provide a range of information on cryptocurrencies plus an easy way to monitor your investments all from a single, integrated dashboard.
  
            <strong>Sign up to CryptoTracker today to step into the exciting world of cryptocurrency!</strong>
          </p>
          <Link className="secondSignUp btn" to="" data-toggle="modal" data-target="#modalRegisterForm">
            Sign Up
      </Link>&nbsp;
          <SignUp className="btn">
            Sign Up
      </SignUp>

      <div>


<img src="./images/tech_header.jpg" className="img-fluid z-depth-1 overlay" alt="Responsive image"/>

</div>
</div>

    



  )
}

export default Home;