import React, { useState } from "react";
import Display from "./Display";
import IncrementButton from "./IncrementButton";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <Display number={number} />
      <IncrementButton onIncrement={increment} />
    </div>
  );
};

export default Parent;
