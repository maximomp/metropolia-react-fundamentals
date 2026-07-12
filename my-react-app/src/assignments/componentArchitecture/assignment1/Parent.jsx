import React from "react";
import styles from "./styles.module.css";
import Child from "./Child";

const Parent = (props) => {
  const { users, userName, selectedUserId, onSelectUser } = props;

  const getUserButtonClassName = (userId) =>
    `${styles.userButton} ${
      selectedUserId === userId ? styles.userButtonSelected : ""
    }`;

  return (
    <section className={styles.parentCard}>
      <h2>Parent Component</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            <button
              className={getUserButtonClassName(user.id)}
              onClick={() => onSelectUser(user.id)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      <Child userName={userName} />
    </section>
  );
};

export default Parent;
