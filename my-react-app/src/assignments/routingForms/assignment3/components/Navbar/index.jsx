import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandBlock}>
        <h2 className={styles.brand}>Orbit Studio</h2>
        <p className={styles.tagline}>
          Crafting clear and modern web experiences
        </p>
      </div>
      <div className={styles.navLinks}>
        <NavLink
          to="/routing-forms/assignment3/"
          end
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/routing-forms/assignment3/about/"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/routing-forms/assignment3/contact/"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.activeLink : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
