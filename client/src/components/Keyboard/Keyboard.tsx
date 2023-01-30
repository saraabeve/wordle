import React from "react";
import styled from "styled-components"
import { Key } from "./Key";

interface props{
  colorKey:{
  [key: string]: string;
  }   

}
 const KeyboardSection = styled.section`
    height: 100px;
    width: 90%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  `;

  const KeyboardRow = styled.div`
    width: 40%;
    margin: 0 auto 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const lines = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    [ "z", "x", "c", "v", "b", "n", "m"]
  ]


export function Keyboard({ colorKey }: props) {
  return (
    <KeyboardSection>
      {lines.map((line, idxr) =>
        <KeyboardRow key={idxr}>
          {line.map((l) =>
            <Key key={l} color={`${colorKey[l]}`?`${colorKey[l]}`:"#85C1E9"} val={l}></Key>
          )}
        </KeyboardRow>
      )}
    </KeyboardSection>
  )
}