import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState } from 'recoil';
import { wakeAllModalVisibleAtom } from '../../../atoms/ModalStates';

export const WakeAll_Modal = () => {
  const [show, setShow] = useRecoilState(wakeAllModalVisibleAtom);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake All Computers</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center fw-bold'>
          You are about to wake all computers.
        </Modal.Body>
        <Modal.Footer>
          You can choose to wake the computers now or schedule a wake for later.
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Schedule Wake
          </Button>
          <Button variant='warning' onClick={handleClose}>
            Wake Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}