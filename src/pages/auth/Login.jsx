import { React, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../components/messages/AlertMessaging";
import AuthService from "../../services/AuthService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login({
        username,
        password,
      });
      showSuccessMessage(response.message);
      setErrors({});
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        showErrorMessage("Incorrect username or password");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles.inputGroup}>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
      <div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div>
        <p>
          Not signed up yet? <Link to="/sign-up">Sign Up</Link>
        </p>{" "}
        {/* Use Link for navigation */}
      </div>
    </div>
  );
}
