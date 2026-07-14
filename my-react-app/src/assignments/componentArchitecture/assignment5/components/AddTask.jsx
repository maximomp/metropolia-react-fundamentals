import React, { useState } from "react";
import styles from "../styles/AddTask.module.css";

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = taskText.trim();
    if (!trimmedText) {
      return;
    }

    onAddTask(trimmedText);
    setTaskText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Add a task"
      />
      <button className={styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
