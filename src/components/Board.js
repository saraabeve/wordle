import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  useContext,
} from "react";
import { Letter } from "./Letter";
import { AuthContext } from "../context/auth";
import RICIBs from "react-individual-character-input-boxes";

export function Board(props) {
  const { guesses, setGuesses } = useContext(AuthContext);

  function handleInput(value) {
    setGuesses(guesses[0].push(value));
    console.log(guesses);
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
