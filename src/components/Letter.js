import React, { createRef, useRef } from "react";
import { useContext } from "react";
import { prototype } from "events";

export function Letter(props) {
  function validateInput(event) {
    const regex = /^[A-Za-z]*$/;
    if (regex.test(event.target.value)) {
      console.log(event.target.value);
      return (event) => {
        props.Input(event.target.value);
      };
    } else {
      event.target.readOnly = true;
      event.target.value = "";
    }
  }
  return <input type="text" maxLength="1" onKeyDown={validateInput} />;
}
