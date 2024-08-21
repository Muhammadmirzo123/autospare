import React from "react";
import "./contactbanner.css"
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const Contactbanner = () => {
  return (
    <div className="contactbanner-container">
      <h1>Get In Touch With Us</h1>
      <p>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className="contactbanner-inputs">
        <div className="contactbanner-inputs-left">
          <div className="contactbanner-location-div">
            <TiLocation className="icon-location" />
            <div>
            <h2>Address</h2>
            <p>Lorem ipum ...</p>
            </div>
          </div>
          <div className="contactbanner-call-div">
            <IoCall className="icon-call"/>
            <div>
            <h2>Phone</h2>
            <p>lorem ipsum ...</p>
            </div>
          </div>
        </div>
        <div className="contactbanner-inputs-right">
            <form>
                <label>Your Name</label>
                <input type="text" placeholder="Abc"/>
                <label>Email address</label>
                <input type="text" placeholder="Abc@def.com"/>
                <label>Subject</label>
                <input type="text" placeholder="This is an optional"/>
                <label>Message</label>
                <input className="massage-input" type="text" placeholder="Hi! id like to ask about"/>
            <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contactbanner;
