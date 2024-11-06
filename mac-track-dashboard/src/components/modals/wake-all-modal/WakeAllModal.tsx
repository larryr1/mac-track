import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState } from 'recoil';
import { WakeAllModalDataAtom } from '../../../atoms/modals/WakeAllModalState';
import { OverlayTrigger } from 'react-bootstrap';
import { EthernetLanPopover } from '../EthernetLanPopover';

export interface WakeAllModalData {
  show: boolean;
}

export const WakeAllModal = () => {

  const [data, setData] = useRecoilState(WakeAllModalDataAtom);
  const { show } = data;

  const handleClose = () => setData({ ...data, show: false });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wake All Computers</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fw-bold'>
          You are about to wake all computers.
          <p className='mb-0 fw-light mt-3'>You can choose to wake the computers now or schedule a wake for later.</p>
          <OverlayTrigger trigger="focus" placement='right' overlay={EthernetLanPopover}>
            <Button variant='link' className='p-0 mt-2 text-warning'>Wake Requirements</Button>
          </OverlayTrigger>
        </Modal.Body>
        <Modal.Footer>
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