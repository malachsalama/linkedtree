import React from "react";
import Footer from "./Footer";

const Contact = () => (
  <>
    <div className="ContactPageHeader">
      <div className="Container">
        <div className="Content">
          <div className="HeadingAndSupportingText">
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="Form">
            <div className="FormFields">
              <div className="name__row">
                <div className="first__name">
                  <label for="fname">First name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="fname"
                    value="Enter your first name"
                  ></input>
                </div>
                <div className="last__name">
                  <label for="lname">Last name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="lname"
                    value="Enter your last name"
                  ></input>
                </div>
              </div>
              <div className="email__row">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="yourname@email.com"
                ></input>
              </div>
              <div className="textarea__row">
                <label for="message">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value="Send me a message and I'll reply as soon as possible..."
                ></input>
              </div>
              <div className="checkbox__row">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  value="terms and conditions"
                ></input>
                <label for="terms">
                  {" "}
                  You agree to providing your data to name who may contact you
                </label>
              </div>
            </div>
            <button id="btn__submit">Send message</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Contact;
