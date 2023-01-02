import React from "react";
import "./Donation.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Donation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .post("https://expa-server.onrender.com/SendDonation", {
        name: name,
        email: email,
        phoneNumber: phone,
        amount: amount,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    alert("Thank you for donation");
    navigate("/");
  };
  return (
    <div>
      <div className="signup-main">
        <div className="signup-container">
          <h2>Donation</h2>
          <p>
            Please fill in the following information.
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />

          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="Amount"
          />

          <Button onClick={handleClick} style={{background:"#ff6600", border:"#ff6600"}} className="btn-fawry">Pay with fawry</Button>

          <Link to="/visa" style={{ textDecoration: 'none', color:"black", width:"100%"}} className="link_btn"> 
            <Button style={{background:"#ff6600", border:"#ff6600"}} className="btn">Pay with visa</Button>
          </Link>


          <p>
            thank you for your
            generous donation !
          </p>

        </div>
      </div>
    </div>
  );
};

export default Donation;