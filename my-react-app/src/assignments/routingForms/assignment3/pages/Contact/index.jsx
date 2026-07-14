import React from "react";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <h1 className={styles.pageTitle}>Contact</h1>
      <p className={styles.pageText}>
        Ready to build something meaningful? Reach us through any channel below.
      </p>

      <div className={styles.contactGrid}>
        <article className={styles.contactCard}>
          <h2 className={styles.cardTitle}>Email</h2>
          <p className={styles.cardText}>hello@orbitstudio.dev</p>
        </article>
        <article className={styles.contactCard}>
          <h2 className={styles.cardTitle}>Phone</h2>
          <p className={styles.cardText}>+358 40 123 4567</p>
        </article>
        <article className={styles.contactCard}>
          <h2 className={styles.cardTitle}>Address</h2>
          <p className={styles.cardText}>Aurora Street 12, Helsinki</p>
        </article>
      </div>

      <p className={styles.note}>Typical response time: within 24 hours.</p>
    </section>
  );
};

export default Contact;
