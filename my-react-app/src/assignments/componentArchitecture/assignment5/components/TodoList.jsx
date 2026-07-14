import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";

const TodoList = ({ tasks, onRemoveTask, onToggleCompleted }) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first task.</p>;
  }

  return (
    <ul className={styles.todoList}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onRemoveTask={onRemoveTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
