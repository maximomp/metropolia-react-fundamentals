import React from "react";

const Message = (props) => {
  const { name } = props;
  const content = <h1>Welcome to learn React, {name}!</h1>;
  return content;
};

export default Message;
