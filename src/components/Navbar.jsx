import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMobileMenu}>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Animation : ''}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Animation : ''}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Animation : ''}`}></div>
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
