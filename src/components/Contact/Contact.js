import React from "react";
import adds from '../../images/address--v1.png';
import msg from '../../images/message.png';
import ring from '../../images/ring2.png';


function Contact() {
  return (
    <section>
      <div className="container">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={adds} />
                </span>
                <span>
                  2912 Meadwbrook Road
                  <br /> Los Angeles, CA
                  <br /> 900017
                </span>
              </li>
              <li>
                <span>
                  <img src={msg} />
                </span>
                <span>najmus2808@gmail.com</span>
              </li>
              <li>
                <span>
                  <img src={adds} />
                </span>
                <span>01705052808</span>
              </li>
            </ul>
            <ul className="sci">
              <li>
                <a href="">
                  <img src={adds} />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={adds} />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={adds} />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={adds} />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={adds} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="fromBox">
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>First name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>Last name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>Mobile number</span>
            </div>
            <div className="inputBox w100">
              <textarea name="" required />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
