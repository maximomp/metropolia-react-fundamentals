import React, { useState } from "react";
import styles from "./styles.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasValidEmail = email.includes("@");
    const hasValidPassword = password.length >= 6;

    const nextErrors = {
      email: hasValidEmail ? "" : "Email must contain @",
      password: hasValidPassword
        ? ""
        : "Password must be at least 6 characters",
    };

    setErrors(nextErrors);

    if (hasValidEmail && hasValidPassword) {
      setMessage("Login successful.");
      setIsSuccess(true);
      return;
    }

    setMessage("Login failed.");
    setIsSuccess(false);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Login Form</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
            className={styles.input}
          />
          <p className={styles.fieldError}>{errors.email}</p>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            className={styles.input}
          />
          <p className={styles.fieldError}>{errors.password}</p>
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      {message && (
        <p className={isSuccess ? styles.successMessage : styles.errorMessage}>
          {message}
        </p>
      )}
    </section>
  );
};

export default LoginForm;
