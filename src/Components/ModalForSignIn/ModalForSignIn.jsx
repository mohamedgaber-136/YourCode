import React, { useEffect, useState } from "react";
import {Login} from '../../Pages/Login/Login'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalStyle.css";
import { useNavigate } from "react-router-dom";
export const ModalForSignIn = () => {
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    let x = setTimeout(() => {
      handleShow();
    }, 3000);
    return () => clearTimeout(x);
  }, []);
  return (
    <>=
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className=" border-0" closeButton></Modal.Header>
        <Modal.Body className="text-center  text-white"> <Login/>  </Modal.Body>
        {/* <Button
          variant="primary"
          className="p-2 rounded-0"
          onClick={() => {
            navigator("/Login");
          }}
        >
          Login
        </Button> */}
      </Modal>
    </>
  );
};
