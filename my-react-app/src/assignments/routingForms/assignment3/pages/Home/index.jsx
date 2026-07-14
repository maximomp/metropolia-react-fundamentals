import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <section className={styles.homePage}>
      <div className={styles.glow} aria-hidden="true" />
      <p className={styles.kicker}>Creative Web Lab</p>
      <h1 className={styles.pageTitle}>Welcome to Orbit Studio</h1>
      <p className={styles.pageText}>
        We craft playful and practical digital experiences for modern teams.{" "}
        <br />
        Explore the About and Contact pages to discover more.
      </p>
      <div className={styles.actionRow}>
        <Link to="about" className={styles.primaryButton}>
          Meet the Team
        </Link>
        <Link to="contact" className={styles.secondaryButton}>
          Start a Project
        </Link>
      </div>
      <div className={styles.statGrid}>
        <article className={styles.statCard}>
          <p className={styles.statValue}>26+</p>
          <p className={styles.statLabel}>Projects launched</p>
        </article>
        <article className={styles.statCard}>
          <p className={styles.statValue}>95%</p>
          <p className={styles.statLabel}>Client satisfaction</p>
        </article>
        <article className={styles.statCard}>
          <p className={styles.statValue}>7 days</p>
          <p className={styles.statLabel}>Average concept sprint</p>
        </article>
      </div>
    </section>
  );
};

export default Home;
