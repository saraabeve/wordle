import React, { createRef, useRef, useState, useContext } from "react";

interface Props {
  color: string
  val: string;
  pos?: number;
}

export function Letter({val, color, pos}: Props) {    
  return (
    <div className="letter" style={{ backgroundColor: `${color}` }}>{val}</div>
  );
}
