import { useState } from "react";

const Square = ({ value, clickHandler }) => {
  return(
    <button className="square"
      onClick={clickHandler}
    >{value}</button>
  )
}

export default Square
