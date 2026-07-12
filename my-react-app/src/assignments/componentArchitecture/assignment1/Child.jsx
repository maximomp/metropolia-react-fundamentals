import React from "react";
import styles from "./styles.module.css";

const Child = (props) => {
  const { userName } = props;
  return (
    <>
      <h2>Child Component</h2>
      <div className={styles.childCard}>
        <p>
          <strong>{userName}</strong>
        </p>
      </div>
    </>
  );
};

export default Child;
