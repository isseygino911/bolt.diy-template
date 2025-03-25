import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>Experience the Thrill of Mongolian Horseback Riding</h1>
        <p>Discover breathtaking landscapes and ancient traditions.</p>
        <button className={styles.ctaButton}>Book Your Adventure</button>
      </div>
      <div className={styles.heroImage}>
        {/* Placeholder for a relevant image */}
        <img src="https://placehold.co/800x600" alt="Mongolian Horseback Riding" />
      </div>
      <div className={styles.shapeDividerTop}></div>
      <div className={styles.shapeDividerBottom}></div>
    </div>
  );
};

export default Hero;
