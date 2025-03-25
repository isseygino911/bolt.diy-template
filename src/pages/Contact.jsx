import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
