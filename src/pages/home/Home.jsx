import React from "react";
import { Link } from "react-router-dom";
// import styles from './Home.module.css';
import styles from './Home.module.css'
export default function Home() {
    return (
        <div className={styles.landingPage}>
          <header>
            <h1>Welcome to Carbarn Blogs</h1>
            <p>A place to read and share your thoughts</p>
          </header>
          <main>
            <section className={styles.features}>
              <h2>Features</h2>
              <ul>
                <li>Read insightful articles</li>
                <li>Share your own stories</li>
                <li>Connect with other readers</li>
              </ul>
            </section>
            {/* <section className={styles.subscribe}>
              <h2>Subscribe to Our Newsletter</h2>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </section> */}
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2023 Your Blog. All rights reserved.</p>
          </footer>
        </div>
      );
}
