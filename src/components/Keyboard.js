import React from "react";

export function Keyboard(props) {
  return (
    <div className="keyboard">
      <div className="keyboardRow">
        <button value={"q"}>Q</button>
        <button value={"w"}>W</button>
        <button value={"e"}>E</button>
        <button value={"r"}>R</button>
        <button value={"t"}>T</button>
        <button value={"y"}>Y</button>
        <button value={"u"}>U</button>
        <button value={"i"}>I</button>
        <button value={"o"}>O</button>
        <button value={"p"}>P</button>
      </div>
      <div className="keyboardRow">
        <button value={"a"}>A</button>
        <button value={"s"}>S</button>
        <button value={"d"}>D</button>
        <button value={"f"}>F</button>
        <button value={"g"}>G</button>
        <button value={"h"}>H</button>
        <button value={"j"}>J</button>
        <button value={"k"}>K</button>
        <button value={"l"}>L</button>
        <button value={"z"}>Z</button>
      </div>
      <div className="keyboardRow">
        <button value={"x"}>X</button>
        <button value={"c"}>C</button>
        <button value={"v"}>V</button>
        <button value={"clear"} id="del">
          delete
        </button>
        <button value={"b"}>B</button>
        <button value={"n"}>N</button>
        <button value={"m"}>M</button>
      </div>
    </div>
  );
}
