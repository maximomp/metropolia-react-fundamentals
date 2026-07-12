import React, { useState } from "react";
import styles from "./styles.module.css";
import Parent from "./Parent";

const App = () => {
  const [users] = useState([
    { id: 1, name: "Maximo" },
    { id: 2, name: "Ada" },
    { id: 3, name: "Linus" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleSelectUser = (id) => {
    setSelectedUserId(id);
  };

  const parentProps = {
    users,
    userName: selectedUser?.name ?? "Unknown",
    selectedUserId,
    onSelectUser: handleSelectUser,
  };

  return (
    <main className={styles.appCard}>
      <h1>App Component</h1>

      <Parent {...parentProps} />
    </main>
  );
};

export default App;
