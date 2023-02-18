import React from "react";

const RemoveTab = ({ title, handleRemove }) => {
  return <li onClick={handleRemove}>{title}</li>;
};

export default RemoveTab;
