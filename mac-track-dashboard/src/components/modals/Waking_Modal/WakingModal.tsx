import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export const WakingModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={true} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body className='text-center fw-bold'>
        Waking Computers
        <div className='mt-4 mb-3'><Spinner animation='border' /></div>
      </Modal.Body>
      <Modal.Footer>
        This may take up to a minute to complete. Please keep this window open.
      </Modal.Footer>
    </Modal>
  )
}