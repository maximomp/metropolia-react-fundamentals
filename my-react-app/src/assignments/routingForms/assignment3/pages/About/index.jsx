import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <section className={styles.aboutPage}>
      <p className={styles.kicker}>About Us</p>
      <h1 className={styles.pageTitle}>A small team with big product energy</h1>
      <p className={styles.pageText}>
        Orbit Studio is an imaginary boutique company founded by Alex Vega, a
        frontend engineer who loves typography, motion design, and clean
        interaction patterns. Our mission is to turn complex ideas into simple,
        enjoyable web products.
      </p>

      <div className={styles.infoGrid}>
        <article className={styles.infoCard}>
          <h2 className={styles.cardTitle}>Our Values</h2>
          <ul className={styles.list}>
            <li>Simple experiences with clear user journeys.</li>
            <li>Bold visual systems that stay practical.</li>
            <li>Fast feedback loops with clients and users.</li>
          </ul>
        </article>

        <article className={styles.infoCard}>
          <h2 className={styles.cardTitle}>What We Build</h2>
          <ul className={styles.list}>
            <li>Marketing websites with strong storytelling.</li>
            <li>Product dashboards for internal teams.</li>
            <li>UI kits and component libraries for scale.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
