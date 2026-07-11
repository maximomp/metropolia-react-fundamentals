import React, { useState } from "react";
import "./styles.css";

const Index = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const buttonIncreaseProps = {
    className: "counter-btn increase",
    onClick: increaseCount,
  };

  const buttonDecreaseProps = {
    className: "counter-btn decrease",
    onClick: decreaseCount,
  };

  return (
    <div className="counter-wrap">
      <h1 className="counter-title">Counter: {count}</h1>

      <div className="counter-actions">
        <button {...buttonIncreaseProps}>+ Increase</button>

        <button {...buttonDecreaseProps}>- Decrease</button>
      </div>
    </div>
  );
};

export default Index;
