import React from "react";
import styles from "./styles.module.css";

const IncrementButton = ({ onIncrement }) => {
  return (
    <button className={styles.incrementButton} onClick={onIncrement}>
      Increment
    </button>
  );
};

export default IncrementButton;
