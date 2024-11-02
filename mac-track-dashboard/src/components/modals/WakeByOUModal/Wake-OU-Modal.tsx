import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select, { ActionMeta, MultiValue } from 'react-select';
import { useRecoilState } from 'recoil';
import { wakeOUModalVisibleAtom } from '../../../atoms/ModalStates';

interface Option {
  value: string;
  label: string;
}

const options = [
  { value: 'Computers', label: 'Computers' },
  { value: 'Office Computers', label: 'Office Computers' },
  { value: 'Student Computers', label: 'Student Computers' },
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

/**
 * WakeByOU_Modal component, produces a modal that allows the user to select an Organizational Unit and an account to use after waking the computers.
 * @returns WakeByOU_Modal component
 */
export const WakeByOU_Modal = () => {

  // State variables
  const [show, setShow] = useRecoilState(wakeOUModalVisibleAtom);
  const [selectedOU, setSelectedOU] = useState<MultiValue<Option>>([]);
  const [selectedAccount, setSelectedAccount] = useState<Option>(accounts[0]);

  // Event handlers
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setSelectedOU([]);
    setSelectedAccount(accounts[0]);
  }

  const handleOUChange = (option: MultiValue<Option> | null, _actionMeta: ActionMeta<Option>) => {
    setSelectedOU(option || []);
  }

  const handleAccountChange = (option: Option | null, _actionMeta: ActionMeta<Option>) => {
    setSelectedAccount(option || accounts[0]);
  }

  // Render
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake by Organizational Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select the Organizational Unit(s) that contains the computers you want to wake.
          <Select options={options} isMulti isSearchable className='text-black mt-3 mb-4' value={selectedOU} onChange={handleOUChange} />

          <Alert variant="warning" className={ selectedOU.length == options.length ? "" : "d-none"}>
            You should use Wake All instead of Wake by Organizational Unit if you want to wake <b>all</b> computers.
            <Button variant="link" className='p-0 ms-1'>Wake All</Button>
          </Alert>
          Select the account to use after waking the computers.
          <Select options={accounts} defaultValue={accounts[0]} isSearchable className='text-black mt-3 mb-4' value={selectedAccount} onChange={handleAccountChange} />
        </Modal.Body>
        <Modal.Footer>
          You can choose to wake the computers now or schedule a wake for later.
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} disabled={(selectedOU.length < 1)}>
            Schedule Wake
          </Button>
          <Button variant='warning' onClick={handleClose} disabled={(selectedOU.length < 1)}>
            Wake Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}