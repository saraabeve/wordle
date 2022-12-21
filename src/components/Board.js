import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  useContext,
} from "react";
import RICIBs from "react-individual-character-input-boxes";
import { Letter } from "./Letter";

export function Board(props) {
  const index = [0, 1, 2, 3, 4];
  const row = (i) => (
    <div className="row">
      {index.map((j) => (
        <Letter row={i} pos={j} inputRegExp={/^[0-9]$/} />
      ))}
    </div>
  );

  return <div className="board">{index.map((i) => row(i))}</div>;
}
