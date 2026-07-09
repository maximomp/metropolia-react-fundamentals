import React from "react";

function App() {
  // Using let for variables that will be reassigned
  let name = "React";
  name = "Next.js";

  let age = 21;
  age = 22;

  // Using const for variables that remain constant
  const birthYear = 2000;

  console.log({ name, age, birthYear });
  // Expected output: { name: "Next.js", age: 22, birthYear: 2000 }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Variable Verification:</h3>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Age:</strong> {age}
        </li>
        <li>
          <strong>Birth Year:</strong> {birthYear}
        </li>
      </ul>
      <p style={{ color: "gray", fontSize: "14px" }}>
        Open the browser console (F12) to see the logged values.
      </p>
    </div>
  );
}

export default App;
