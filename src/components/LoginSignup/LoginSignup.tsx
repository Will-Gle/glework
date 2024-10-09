import { useState } from "react";
import "./LoginSignup.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import CSS for the phone input library
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for react-datepicker

const LoginSignup: React.FC = () => {
  // State to manage the current action (either 'Sign Up' or 'Login')
  const [action, setAction] = useState<string>("Sign Up");
  // State to manage the phone number input value
  const [phone, setPhone] = useState<string>("");
  // State to manage the selected date of birth
  const [dob, setDob] = useState<Date | null>(null);
  // State to manage the email input value
  const [email, setEmail] = useState<string>("");
  // State to manage email error messages
  const [emailError, setEmailError] = useState<string>("");

  // Function to validate the email format using regex
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="container">
      {/* Header displaying either 'Sign Up' or 'Login' based on the state */}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <>
            {/* First Name Input */}
            <div className="input-container">
              <label htmlFor="firstName" className="input-label">
                First Name
              </label>
              <input
                id="firstName"
                className="input"
                type="text"
                placeholder="First Name"
              />
            </div>

            {/* Last Name Input */}
            <div className="input-container">
              <label htmlFor="lastName" className="input-label">
                Last Name
              </label>
              <input
                id="lastName"
                className="input"
                type="text"
                placeholder="Last Name"
              />
            </div>

            {/* Date of Birth Input using DatePicker */}
            <div className="input-container">
              <label htmlFor="dateOfBirth" className="input-label">
                Date of Birth
              </label>
              <DatePicker
                id="dateOfBirth"
                className="input"
                selected={dob}
                onChange={(date: Date | null) => setDob(date)} // Update the state with the selected date
                dateFormat="dd/MM/yyyy" // Custom date format
                placeholderText="Select your date of birth" // Placeholder text for DatePicker
              />
            </div>

            {/* Phone Number Input using PhoneInput library */}
            <div className="input-container">
              <label htmlFor="phoneNumber" className="input-label">
                Phone Number
              </label>
              <PhoneInput
                country={"vn"} // Default country set to VN
                value={phone} // Phone number state
                onChange={setPhone} // Update the phone number state on change
                inputClass="phone-input"
                containerClass="phone-input-container"
              />
            </div>
          </>
        )}

        {/* Email Input with validation */}
        <div className="input-container">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            className="input"
            type="email"
            value={email} // Email state
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value); // Validate the email when input changes
            }}
            placeholder="Email"
          />
          {emailError && <span className="error-message">{emailError}</span>}{" "}
          {/* Display error message if email is invalid */}
        </div>

        {/* Password Input */}
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            id="password"
            className="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      {/* Toggle Link to switch between 'Sign Up' and 'Login' */}
      <div className="toggle-action">
        {action === "Sign Up" ? (
          <>
            Already have an account?{" "}
            <a href="#" onClick={() => setAction("Login")}>
              Click Here
            </a>
          </>
        ) : (
          <>
            Don't have an account yet?{" "}
            <a href="#" onClick={() => setAction("Sign Up")}>
              Click Here
            </a>
          </>
        )}
      </div>

      {/* Forgot password link, visible only during 'Login' */}
      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      {/* Single Action Button for 'Sign Up' or 'Login' */}
      <div className="submit-container">
        <div className="submit" onClick={() => {}}>
          {action}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
