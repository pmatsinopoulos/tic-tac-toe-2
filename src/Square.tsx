import React from "react";
import { useState } from "react";
import type { ClickHandler } from "./types";

const Square = ({
  value,
  row,
  column,
  clickHandler
}: {
  value: string;
  row: number;
  column: number;
  clickHandler: ClickHandler
}) => {
  return (
    <button className="square"
      onClick={(_) => clickHandler(row, column)}
    >{value}</button>
  )
}

export default Square
