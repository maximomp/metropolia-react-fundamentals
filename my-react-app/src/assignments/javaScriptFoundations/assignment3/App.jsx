// Use array destructuring to print out a simple calculating between two numbers.

// Add this function to App.js:

// const calculate = (a, b) => {

//     /* Your code here */

//     return [add, subtract, multiply, divide];

// }

// const [add, subtract, multiply, divide] = calculate(6, 8);

// Now print on the screen "6 * 8 = 24" using destructured array.

// Return screenshot from browser and copy of code from App.js

import React from "react";

// THIS IS A APP:JSX FILE REPLACE IN MY-REACT-APP/SRC/APP.JSX FOR TEST

function App() {
  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  };

  const [add, subtract, multiply, divide] = calculate(6, 8);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <p>6 * 8 = {multiply}</p>
    </div>
  );
}

export default App;
