import React from "react";

function App() {
  const users = [
    { name: "Anna", active: true },
    { name: "Tom", active: false },
    { name: "Luna", active: true },
  ];

  // Filter the array: only return users where the 'active' property is true
  const activeUsers = users.filter((user) => user.active);

  console.log(activeUsers);
  // Expected output: [{ name: 'Anna', active: true }, { name: 'Luna', active: true }]

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Active Users:</h3>
      <ul>
        {activeUsers.map((user, index) => (
          <li key={index}>{user.name} (Active)</li>
        ))}
      </ul>
      <p style={{ color: "gray", fontSize: "14px" }}>
        Open the browser console (F12) to view the filtered array structure.
      </p>
    </div>
  );
}

export default App;
