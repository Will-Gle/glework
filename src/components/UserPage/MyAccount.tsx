import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import apiService from "../apiService";
import "./MyAccount.css"; // Add your styles

interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  city: string;
}

const MyAccount: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
    city: "",
  });

  // State for success or error messages
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch user ID and user data on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login if token is not found
      navigate("/login");
    } else {
      fetchUserId(); // Fetch user ID if authenticated
    }
  }, []);

  const fetchUserId = async () => {
    try {
      const data = await apiService.get("auth/user");
      setFormData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiService.put(`auth/user`, formData);
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile.");
    }
  };

  return (
    <div className="my-account">
      <h1>My Account</h1>
      <p>Manage profile information for account security</p>
      <div className="account-form-container">
        <div className="account-form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="account-form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="account-form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="account-form-group">
          <label>Telephone</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Your Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="account-form-group">
          <label>Date Of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Your Date of Birth (DD-MM-YYYY)"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="account-form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Your Default Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="account-form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="submit-btn">
          Xác nhận
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default MyAccount;
