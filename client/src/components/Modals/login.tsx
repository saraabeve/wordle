import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

interface props{
  show: boolean
}

export default function Login({show}:props) {
  const InputName = useRef(null);
  function handleLogin() {
    const name = InputName.current.value;
    if (name) {
      localStorage.setItem("user", name);
    }
    show= false;
  }
  return (
    <Modal
      show={show}
      centered={true}
      keyboard={true}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => {return show= false }}>
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
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin} className="login">
            Lets play
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
