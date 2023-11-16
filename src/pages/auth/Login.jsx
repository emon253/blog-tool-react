import {React, useState} from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic using 'username' and 'password' state values
    console.log(`Username: ${username}, Password: ${password}`);
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
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
                <p>Not signed up yet? <Link to="/sign-up">Sign Up</Link></p> {/* Use Link for navigation */}
            </div>
    </div>
  );
}
