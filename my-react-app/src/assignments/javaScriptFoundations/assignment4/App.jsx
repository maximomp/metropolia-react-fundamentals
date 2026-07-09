// Completion requirements

// Your task is to write .map array method for print out capitalized names from given names array.

// // Find how is best way to edit code

// const names = ['alice', 'bob', 'carol'];

// // Return a new array with names capitalized

// const capitalized = names.map(name => /* your code here */);

// console.log(capitalized); // The answer should be: ['Alice', 'Bob', 'Carol']

// Return screenshot from browser and copy of code.

import React from "react";

// THIS IS A APP:JSX FILE REPLACE IN MY-REACT-APP/SRC/APP.JSX FOR TEST

function App() {
  const names = ["alice", "bob", "carol"];

  const capitalized = names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1),
  );

  console.log(capitalized); // ['Alice', 'Bob', 'Carol']

  return <></>;
}

export default App;
