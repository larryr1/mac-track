import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const WakeAll_Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Wake All
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake All</Modal.Title>
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