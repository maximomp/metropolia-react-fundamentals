import React, { useState } from "react";
import "./styles.css";

function NameForm() {
  const [name, setName] = useState("");

  const handleShowName = () => {
    alert(`Your name is: ${name}`);
  };

  return (
    <div className="name-form">
      <input
        className="name-input"
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="name-btn" onClick={handleShowName}>
        Show Name
      </button>
    </div>
  );
}

export default NameForm;
