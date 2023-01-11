import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  useContext,
} from "react";
import { Letter } from "./Letter";

export function Board(props) {
  const index = [0, 1, 2, 3, 4];
  const row = (i) => (
    <div className="row">
      {index.map((j) => (
        <Letter row={i} pos={j} />
      ))}
    </div>
  );

  return (
    <div className="board">
      <div>{index.map((i) => row(i))}</div>
    </div>
  );
}
