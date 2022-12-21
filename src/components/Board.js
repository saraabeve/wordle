import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  useContext,
} from "react";
import { Letter } from "./Letter";
import { AuthContext } from "../context/auth";

export function Board(props) {
  const { guesses, setGuesses } = useContext(AuthContext);

  function handleInput(value) {
    setGuesses((guesses[props.row][props.pos] = value));
  }
  const index = [0, 1, 2, 3, 4];
  const row = (i) => (
    <div className="row">
      {index.map((j) => (
        <Letter row={i} pos={j} Input={handleInput} />
      ))}
    </div>
  );

  return <div className="board">{index.map((i) => row(i))}</div>;
}
