import React, { createRef, re } from "react";
import { useRef, useContext } from "react";

export function Letter(props) {
  function validateInput(event) {
    const regex = /^[A-Za-z]*$/;
    if (regex.test(event.target.value)) {
      return props.Input(event.value);
    }
    console.log("ccc");
  }

  return <input type="text" maxLength="1" onKeyDown={validateInput} />;
}
