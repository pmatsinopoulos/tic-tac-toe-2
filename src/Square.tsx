import React from "react";
import { useState } from "react";
import type { ClickHandler } from "./types";

interface SquareProps {
  value: string;
  row: number;
  column: number;
  clickHandler: ClickHandler;
}

const Square = ({
  value,
  row,
  column,
  clickHandler
}: SquareProps) => {
  return (
    <button className="square"
      onClick={(_) => clickHandler(row, column)}
    >{value}</button>
  )
}

export default Square
