import React from "react";
import styles from "./styles.module.css";

const MultipleStyles = () => {
  const inlineStyle = {
    backgroundColor: "#fff7ed",
    border: "2px solid #f59e0b",
  };

  return (
    <div className={styles.box} style={inlineStyle}>
      This element uses CSS module + inline style.
    </div>
  );
};

export default MultipleStyles;
