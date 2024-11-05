import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

interface WakingModalProps {
  show: boolean;
  ou: string;
  current: number;
  total: number;
}

export const WakingModal = (props: WakingModalProps) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={true} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body className='text-center fw-bold'>
        Waking Computers
        <div className='mt-4 mb-3'><Spinner animation='border' /></div>
        <p className='fw-light mb-0'>{props.current || 0}/{props.total || 0} Woke</p>
        <p className={((props.ou == null) ? "d-none" : "") + " fw-light mb-0"}>OU: {props.ou}</p>
      </Modal.Body>
      <Modal.Footer>
        This may take up to a minute to complete. Please keep this window open.
      </Modal.Footer>
    </Modal>
  )
}