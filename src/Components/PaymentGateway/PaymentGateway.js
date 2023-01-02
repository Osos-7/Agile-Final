import React from 'react'
import CreditCard from "../../Assets/CreditCard.png"
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

import "./PaymentGateway.css"

const PaymentGateway = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        alert("Thank you for donation");
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        navigate("/home");
      };

  return (
    <div>
        <div class="container">

            <form action="">

                <div className="row">

                    <div className="col">

                        <h3 className="title">billing address</h3>

                        <div className="inputBox">
                            <span>full name :</span>
                            <input type="text" placeholder="Ahmed Zaki"/>
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com"/>
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="Street Name"/>
                        </div>
                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Cairo"/>
                        </div>

                        <div className="flex">
                            <div className="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="Egypt"/>
                            </div>
                            <div className="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456"/>
                            </div>
                        </div>

                    </div>

                    <div className="col">

                        <h3 className="title">payment</h3>

                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src={CreditCard} alt="" className='card_img'/>
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="Mr. Ahmed Zaki"/>
                        </div>
                        <div className="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444"/>
                        </div>
                        <div className="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="January"/>
                        </div>

                        <div className="flex">
                            <div class="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022"/>
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234"/>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='btn-checkout'>
                <Button onClick={handleClick} style={{background:"#ff6600", border:"#ff6600"}} className="btn_checkout" >Proceed to Checkout</Button>
                </div>
            </form>

            </div>  
    </div>
  )
}

export default PaymentGateway



