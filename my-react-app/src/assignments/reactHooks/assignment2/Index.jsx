import React, { useRef } from "react";
import "./styles.css";

const Index = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="focus-wrapper">
      <input
        className="focus-input"
        ref={inputRef}
        type="text"
        placeholder="Write something..."
      />
      <button className="focus-button" onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};

export default Index;
