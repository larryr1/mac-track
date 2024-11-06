import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select, { ActionMeta, MultiValue } from 'react-select';
import { useRecoilState } from 'recoil';
import { WakeOuModalDataAtom } from '../../../atoms/modals/WakeOuModalState';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { EthernetLanPopover } from '../EthernetLanPopover';

interface Option {
  value: string;
  label: string;
}

export interface WakeOuModalData {
  show: boolean;
  ouOption?: MultiValue<Option>;
  accountOption?: Option;
}

const ouOptions = [
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
 * WakeOuModal component, produces a modal that allows the user to select an Organizational Unit and an account to use after waking the computers.
 * @returns WakeOuModal component
 */
export const WakeOuModal = () => {

  // State variables
  const [data, setData] = useRecoilState<WakeOuModalData>(WakeOuModalDataAtom);
  const { show, ouOption = [ouOptions[0]], accountOption = accounts[0] } = data;

  // Event handlers
  const handleClose = () => setData({ ...data, show: false });

  const handleOUChange = (option: MultiValue<Option> | null, _actionMeta: ActionMeta<Option>) => {
    setData({ ...data, ouOption: option || [] });
  }

  const handleAccountChange = (option: Option | null, _actionMeta: ActionMeta<Option>) => {
    setData({ ...data, accountOption: option || accounts[0] });
  }

  const activeDirectoryOuPopover = (
    <Popover id="active-directory-ou-notice-popover" className='text-warning'>
      <Popover.Header>Active Directory Notice</Popover.Header>
      <Popover.Body className='text-warning'>
        OUs are self-reported by Mac Track at computer startup. If you make changes in Active Directory, the affected computers must restart at least once and apply new policy before the changes are reflected in Mac Track.
      </Popover.Body>
    </Popover>
  );

  // Render
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake by Organizational Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select the Organizational Unit(s) that contains the computers you want to wake.
          <Select options={ouOptions} isMulti isSearchable className='text-black mt-3 mb-1' value={ouOption} onChange={handleOUChange} />
          <OverlayTrigger trigger="focus" placement='right' overlay={activeDirectoryOuPopover}>
            <Button variant='link' className='p-0 text-warning'>Using Active Directory OUs</Button>
          </OverlayTrigger>

          <Alert variant="warning" className={ ouOption.length == ouOptions.length ? "" : "d-none"}>
            You should use Wake All instead of Wake by Organizational Unit if you want to wake <b>all</b> computers.
            <Button variant="link" className='p-0 ms-1'>Wake All</Button>
          </Alert>

          <p className='mb-0 mt-4'>Select the account to use after waking the computers.</p>
          <Select options={accounts} defaultValue={accounts[0]} isSearchable className='text-black mt-3 mb-4' value={accountOption} onChange={handleAccountChange} />

          <OverlayTrigger trigger="focus" placement='right' overlay={EthernetLanPopover}>
            <Button variant='link' className='p-0 mt-1 text-warning'>Wake Requirements</Button>
          </OverlayTrigger>

        </Modal.Body>
        <Modal.Footer>
          You can choose to wake the computers now or schedule a wake for later.
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} disabled={(ouOption.length < 1)}>
            Schedule Wake
          </Button>
          <Button variant='warning' onClick={handleClose} disabled={(ouOption?.length < 1)}>
            Wake Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}