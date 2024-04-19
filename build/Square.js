import React from "react";
const Square = ({ value, row, column, clickHandler }) => {
    return (React.createElement("button", { className: "square", onClick: (_) => clickHandler(row, column) }, value));
};
export default Square;
