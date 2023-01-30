import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { event } from "cypress/types/jquery";

interface props{
  show: boolean
  loginHandle: any;
  user:string;
}

export default function Login({show, loginHandle, user}:props) {
  const InputName = useRef(null);
  user= InputName?.current
  function handleLogin() {
    const name = InputName.current.value;
    if (name) {
      localStorage.setItem("user", name);
    }
    show = false;
  }
  return (
    <Modal
      show={show}
      centered={true}
      keyboard={true}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <h3>welcome🌻</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login">
            <form action="/">
              <input
                type="text"
                placeholder={"name"}
                className="login"
                ref={InputName}
              ></input>
              <button type={"button"}onClick={loginHandle}>log in</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
