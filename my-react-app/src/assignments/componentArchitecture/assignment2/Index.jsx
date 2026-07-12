import React, { useState } from "react";
import "./styles.css";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h1>Login Toggle</h1>
      <button className="login-btn" onClick={handleToggleLogin}>
        {isLoggedIn ? "Welcome!" : "Please sign in."}
      </button>
    </div>
  );
};

export default Index;
