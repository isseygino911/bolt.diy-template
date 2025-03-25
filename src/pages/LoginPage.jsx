import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        <div className={styles.welcomeText}>
          <h1>Welcome to Voices Education.</h1>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.loginForm}>
          <h2>Create Account</h2>
          <button className={styles.googleButton}>
            <img src="/google-icon.svg" alt="Google Icon" className={styles.socialIcon} />
            Sign up with Google
          </button>
          <button className={styles.facebookButton}>
            <img src="/facebook-icon.svg" alt="Facebook Icon" className={styles.socialIcon} />
            Sign up with Facebook
          </button>
          <div className={styles.orSeparator}>-OR-</div>
          <form>
            <div className={styles.formGroup}>
              <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="email" name="email" placeholder="Email Address" />
            </div>
            <div className={styles.formGroup}>
              <input type="password" id="password" name="password" placeholder="Password" />
              <span className={styles.passwordIcon}>👁️</span>
            </div>
            <button type="submit" className={styles.createAccountButton}>Create Account</button>
          </form>
          <div className={styles.loginLink}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
