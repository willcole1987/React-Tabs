import React from "react";

const AddTab = ({ title, handleAdd }) => {
  return <li onClick={handleAdd}>{title}</li>;
};

export default AddTab;
