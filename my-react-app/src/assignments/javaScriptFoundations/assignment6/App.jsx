import React from "react";

function App() {
  const animals = ["dog", "cat", "dog", "bird", "cat", "dog"];

  // Count how many times each animal appears using .reduce()
  const count = animals.reduce((acc, animal) => {
    // If the animal exists in the object, increment it; otherwise, set it to 1
    acc[animal] = (acc[animal] || 0) + 1;
    return acc;
  }, {});

  console.log(count);
  // Expected output: { dog: 3, cat: 2, bird: 1 }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Animal Occurrences Count:</h3>
      <ul>
        {Object.entries(count).map(([animal, amount]) => (
          <li key={animal}>
            <strong>{animal.charAt(0).toUpperCase() + animal.slice(1)}:</strong>{" "}
            {amount}
          </li>
        ))}
      </ul>
      <p style={{ color: "gray", fontSize: "14px" }}>
        Open the browser console (F12) to view the logged object structure.
      </p>
    </div>
  );
}

export default App;
