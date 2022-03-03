import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { getTokenFailure, handleModalClose } from "../../store/actions";

export const SessionModal = ({showModal, }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = () => {
    sessionStorage.clear();
    localStorage.clear();
    dispatch(getTokenFailure());
    dispatch(handleModalClose());
    history.push("/");
  }     

  return (
    <Modal
      size="sm"
      show={showModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" >
        <h6 className="mb-0">Session Timed Out, Please Login Again!!!</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer className="p-1">
        <Button variant="danger" onClick={handleLogoutClick} >
          ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
