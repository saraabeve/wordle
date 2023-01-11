import React, { createRef, useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export function Letter({ pos, row }) {
  const { board, setBoard, currentGuess, setCurrentGuess } =
    useContext(AppContext);
  const letterVal = board[row][pos];

  function setNewVal(event) {
    if (currentGuess.pos > 4) {
      setCurrentGuess({ row: currentGuess.row + 1, pos: 0 });
    }
    const regex = /^[A-Za-z]*$/;
    if (regex.test(event.target.value)) {
      const newBoard = [...board];
      newBoard[currentGuess.row][currentGuess.pos] = event.target.value;
      setBoard(newBoard);
      setCurrentGuess({ ...currentGuess, pos: currentGuess.pos + 1 });
    }
  }

  return (
    <input type="text" maxLength="1" value={letterVal} onChange={setNewVal} />
  );
}
