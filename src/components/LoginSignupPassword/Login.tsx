import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.css";

// API URL imported from environment variables
const apiUrl = import.meta.env.VITE_API_URL;

const Login: React.FC = () => {
  // State variables for form fields and errors
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const navigate = useNavigate();

  // Validate email input
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // Handle login action
  const handleLogin = async () => {
    if (emailError || !email || !password) {
      setLoginError("Please fill in all fields correctly.");
      return;
    }

    try {
      // Send a POST request to the server to log in the user
      const response = await Axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      navigate("/landingpage");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      {/* Input fields for email and password */}
      <div className="inputs">
        <div className="input-container">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            placeholder="Email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </div>

      {/* Display login error messages */}
      {loginError && <div className="error-message">{loginError}</div>}

      <div className="toggle-action" style={{ textDecoration: "none" }}>
        First time? Sign up now{" "}
        <span onClick={() => navigate("/signup")}>Click Here</span>
      </div>

      <div className="forgot-password" style={{ textDecoration: "none" }}>
        Forget Password?{" "}
        <span onClick={() => navigate("/lost-password")}>Click Here</span>
      </div>

      {/* Login button */}
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
