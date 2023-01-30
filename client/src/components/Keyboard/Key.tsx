import React from "react";
import styled from "styled-components";
interface Props{
    color: string;
    val: string;
}
 const KeyboardButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 6px 0 0;
    height: 40px;
    flex: 1;
    border: 1px;
    border-radius: 4px;
    background-color:#D0ECE7 ;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    &:last-of-type {
      margin: 0;
    }
  `;

export function Key({color,val}:Props) {

    return (
        <KeyboardButton style={{ backgroundColor: `${color}` }}>{val.toUpperCase()}</KeyboardButton>
    )

}