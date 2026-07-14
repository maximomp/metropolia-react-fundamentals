import React from "react";
import styles from "../styles/TodoItem.module.css";

const TodoItem = ({ task, onRemoveTask, onToggleCompleted }) => {
  return (
    <li
      className={`${styles.item} ${
        task.completed ? styles.itemCompleted : styles.itemPending
      }`}
    >
      <span
        className={`${styles.text} ${task.completed ? styles.completed : ""}`}
      >
        {task.text}
      </span>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.completeButton}
          onClick={() => onToggleCompleted(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => onRemoveTask(task.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
