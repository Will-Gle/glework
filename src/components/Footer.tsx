import React from "react";
import "./Footer.css";
import {
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

// Footer component that represents the bottom section of the application
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Stay in the Loop Section */}
        <div className="footer-section">
          <h3>STAY IN THE LOOP</h3>
          <p>Sign up with your email address to receive news and updates.</p>
          <div className="email-signup">
            {/* Input field for email address */}
            <input type="email" placeholder="Email" />
            {/* Button with an arrow icon for submitting the email */}
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* GLE.WORK Information Section */}
        <div className="footer-section">
          <h3>GLE.WORK</h3>
          {/* Address Information */}
          <p>
            ABC Street, Ward X<br />
            Ho Chi Minh, Vietnam
          </p>
          {/* Contact Email */}
          <p>cuongsayyay@gmail.com</p>
          {/* Social Media Icons */}
          <div className="social-icons">
            <FaFacebook /> {/* Facebook Icon */}
            <FaTwitter /> {/* Twitter Icon */}
            <FaInstagram /> {/* Instagram Icon */}
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <ul>
            {/* Term of Service Link */}
            <li>
              <a href="#">Term of Service</a>
            </li>
            {/* Privacy Policy Link */}
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            {/* Return Policy Link */}
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
