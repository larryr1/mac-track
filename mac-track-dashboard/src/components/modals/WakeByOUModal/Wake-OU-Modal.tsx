import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

const options = [
  { value: 'Lab 128', label: 'Lab 128' },
  { value: 'Lab 203', label: 'Lab 203' },
  { value: 'Lab 205', label: 'Lab 205' },
  { value: 'Lab 224', label: 'Lab 224' },
  { value: 'Lab 226', label: 'Lab 226' },
]

const accounts = [
  { value: 'do-not-logon', label: 'Do Not Perform Logon' },
  { value: '1', label: 'fsa@testing' },
  { value: '2', label: 'bluebooks@testing' },
  { value: '3', label: 'student' },
  { value: '4', label: 'sa-admin' },
]

export const WakeByOU_Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake by Organizational Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select the Organizational Unit(s) that contains the computers you want to wake.
          <Select options={options} isMulti isSearchable className='text-black mt-3 mb-4' />
          Select the account to use after waking the computers.
          <Select options={accounts} defaultValue={accounts[0]} isSearchable className='text-black mt-3 mb-4' />
        </Modal.Body>
        <Modal.Footer>
          You can choose to wake the computers now or schedule a wake for later.
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} disabled>
            Schedule Wake
          </Button>
          <Button variant='warning' onClick={handleClose} disabled>
            Wake Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}