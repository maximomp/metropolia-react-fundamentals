import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  const handleShowValue = () => {
    const value = inputRef.current?.value.trim() ?? "";

    if (value) {
      setDisplayText(value);
      return;
    }

    setDisplayText("Nothing to display");
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Uncontrolled Form</h2>

      <div className={styles.formRow}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something"
          className={styles.input}
        />
        <button
          type="button"
          onClick={handleShowValue}
          className={styles.button}
        >
          Show Value
        </button>
      </div>

      <p className={styles.result}>{displayText}</p>
    </section>
  );
};

export default UncontrolledForm;
