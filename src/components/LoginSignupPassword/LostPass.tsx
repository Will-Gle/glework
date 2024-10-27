import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LostPass.css";

const LostPass: React.FC = () => {
  // State variables to manage form fields and messages
  const [email, setEmail] = useState<string>(""); // State to store email address
  const [message, setMessage] = useState<string>(""); // State to store success message
  const [emailError, setEmailError] = useState<string>(""); // State to store email validation error
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to validate the email address input
  const validateEmail = (email: string) => {
    // Regular expression for validating an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address"); // Set error if email is invalid
    } else {
      setEmailError(""); // Clear error if email is valid
    }
  };

  // Function to handle password reset action
  const handlePasswordReset = () => {
    // Validate email input before proceeding
    if (emailError || !email) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Set success message indicating that a password reset link has been sent
    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>

      {/* Email input for password reset */}
      <div className="input-container">
        <label htmlFor="email" className="input-label">
          Enter your email address
        </label>
        <input
          id="email"
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value); // Validate email as user types
          }}
          placeholder="Email"
        />
        {/* Display email validation error if present */}
        {emailError && (
          <span style={{ color: "red", fontSize: "14px" }}>{emailError}</span>
        )}
      </div>

      {/* Button to submit password reset request */}
      <button
        className="submit"
        onClick={handlePasswordReset}
        style={{ marginTop: "20px" }}
      >
        Send Reset Link
      </button>

      {/* Display success message if reset link is sent */}
      {message && (
        <p style={{ color: "green", marginTop: "20px" }}>{message}</p>
      )}

      {/* Link to navigate back to login page */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <span
          onClick={() => navigate("/login")} // Navigate to login page
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Back to Login
        </span>
      </div>
    </div>
  );
};

export default LostPass;
