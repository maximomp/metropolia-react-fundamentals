import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import styles from "./styles.module.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className={styles.body}>
      <h2>Simple To-Do List</h2>
      <AddTask onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onRemoveTask={removeTask}
        onToggleCompleted={toggleCompleted}
      />
    </div>
  );
};

export default App;
