import React from 'react';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.shapeDecoration}>
        <div className={`${styles.shape} ${styles.circle}`}></div>
        <div className={`${styles.shape} ${styles.rectangle}`}></div>
        <div className={`${styles.shape} ${styles.triangle}`}></div>
        <div className={`${styles.shape} ${styles.purpleSquare}`}></div>
        <div className={`${styles.shape} ${styles.yellowPolygon}`}></div>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className={styles.footer}>
        <p>&copy; 2023 My Company</p>
      </footer>
    </div>
  );
}

export default App;
