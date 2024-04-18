import { useState } from "react"
import Square from "./Square"

export default function Board() {
  const [lastValue, setLastValue] = useState('');
  const [winner, setWinner] = useState(false);
  const rows = 3;
  const columns = rows;

  const emptyArray = () => Array(rows).fill(Array(columns).fill(''));
  const copyArray = (oldArray) => oldArray.map(row => [...row]);

  const [squareValues, setSquareValues] = useState(emptyArray());

  const clickHandler = (row, column) => {
    console.debug('clickHandler', row, column);

    if (squareValues[row][column] === '') {
      const newValue = nextValue();
      setLastValue(newValue);

      const newArray = copyArray(squareValues);
      newArray[row][column] = newValue;
      setSquareValues(newArray);

      if (doWeHaveWinner(newArray)) {
        setWinner(true);
      }
    }
  }

  const doWeHaveWinner = (newArray) => {
    let result = false;

    // Check each row:
    for (let i = 0; i < rows && !result; i++) {
      const firstValue = newArray[i][0]
      if (firstValue === '') {
        continue;
      }

      let j = 1;
      for (;j < columns && newArray[i][j] === firstValue; j++);

      result = (j === columns);
    }

    // Check each column
    if (!result) {
      for (let j = 0; j < columns && !result; j++) {
        const firstValue = newArray[0][j];
        if (firstValue === '') {
          continue;
        }

        let i = 1;
        for (;i < rows && newArray[i][j] === firstValue; i++);

        result = (i === rows);
      }
    }

    // Check diagonal - top-left to bottom-right
    if (!result) {
      for (let i = 0; i < rows && !result; i++) {
        const firstValue = newArray[i][0];
        if (firstValue === '') {
          continue;
        }

        let j = 1;
        let ii = i + 1;
        for (;j < columns && ii < rows && newArray[ii][j] === firstValue; j++, ii++);

        result = (j === columns);
      }
    }

    // Check diagonal - bottom-left to bottom-right
    if (!result) {
      for (let i = rows-1; i > -1 && !result; i--) {
        const firstValue = newArray[i][0];
        if (firstValue === '') {
          continue;
        }

        let j = 1;
        let ii = i - 1;
        for (;j < columns && ii > -1 && newArray[ii][j] === firstValue; j++, ii--);

        result = (j === columns);
      }
    }

    return result;
  }

  const nextValue = () => {
    if (lastValue === '') {
      return 'X'
    }
    if (lastValue === 'X') {
      return 'O'
    }
    if (lastValue === 'O') {
      return 'X'
    }
  }

  const restart = () => {
    setWinner(false);
    clearSquareValues();
  }

  const clearSquareValues = () => {
    setSquareValues(emptyArray())
  }

  return (
    <>
      {squareValues.map((row, i) => {
        return (
          <div key={`board-row-${i}`} className="board-row">
            {row.map((column, j) => {
              return (
                <Square key={`square-${i}-${j}`} value={column} clickHandler={() => clickHandler(i, j)} />
              );
            })}
          </div>
        );
      })}

      <div>
        {winner && (
          <>
            <div>Winner is: {lastValue}</div>
          </>
        )}
        <button className="main-action-button" onClick={restart}>Restart</button>
      </div>
    </>
  )
}
