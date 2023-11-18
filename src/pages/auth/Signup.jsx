import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../components/messages/AlertMessaging";
import AuthService from "../../services/AuthService";

export default function Signup() {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      navigate("/");
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.signup(userData);
      showSuccessMessage(
        "Signup successful! Now you can login Carbarn Blogging system!"
      );
      setErrors({});
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        showErrorMessage("Signup failed! Please try again.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            name="fullName"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={userData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            value={userData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles.inputGroup}>
          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
