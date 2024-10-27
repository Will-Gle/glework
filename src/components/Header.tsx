import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

// Header component that represents the top navigation bar of the application
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-main">
        {/* Logo Section */}
        <div className="logo">
          <strong>GLE.WORK</strong> {/* Application name */}
        </div>

        {/* Navigation Section */}
        <nav className="navigation">
          {/* Using Link components from react-router-dom to navigate within the application */}
          <Link to="/blogs">Blogs</Link> {/* Link to Blogs page */}
          <Link to="/services">Services</Link> {/* Link to Services page */}
          <Link to="/archive">Archive</Link> {/* Link to Archive page */}
          <Link to="/login">Login</Link> {/* Link to Login page */}
        </nav>

        {/* Icons Section */}
        <div className="icons">
          {/* Search Icon, User Icon, and Shopping Bag Icon using react-icons */}
          <FaSearch className="icon" />{" "}
          {/* Search functionality (not yet implemented) */}
          <FaUser className="icon" />{" "}
          {/* User icon for user profile access (not yet implemented) */}
          <FaShoppingBag className="icon" />{" "}
          {/* Shopping bag icon for cart functionality (not yet implemented) */}
        </div>
      </div>
    </header>
  );
};

export default Header;
