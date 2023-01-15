import React, { createRef, useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Board } from "./Board";

export function Letter({ pos, row }) {
  const { board, setBoard, currentGuess, setCurrentGuess } =
    useContext(AppContext);
  const letterVal = board[row][pos];

  function deleteVal(event) {
    const newBoard = [...board];
    newBoard[currentGuess.row][currentGuess.pos] = "";
    setBoard(newBoard);
    setCurrentGuess({ ...currentGuess, pos: currentGuess.pos - 1 });
    event.target.prevElementSibling.focus();
  }

  function setNewVal(event) {
    const val = event.target.value;
    console.log(val);
    if (!/^[A-Za-z]*$/.test(val)) {
      if (val === "Backspace") {
        deleteVal(event);
      }
      return;
    }
    const newBoard = [...board];
    newBoard[currentGuess.row][currentGuess.pos] = val;
    setBoard(newBoard);
    setCurrentGuess({ ...currentGuess, pos: currentGuess.pos + 1 });
    if (currentGuess.pos === 4) {
      setCurrentGuess({ row: currentGuess.row + 1, pos: 0 });
    } else {
      event.target.nextElementSibling.focus();
    }
  }
  return (
    <input
      type="text"
      maxLength={1}
      value={letterVal}
      onChange={setNewVal}
      autoFocus={pos == 0 && row == 0}
    />
  );
}
