import { Spinner } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState } from 'recoil';
import { wakingModalDataAtom } from '../../../atoms/modals/WakingModalState.ts';

export interface WakingModalData {
  show: boolean;
  ou: string;
  current: number;
  total: number;
}

/**
 * WakingModal component displays a modal that shows the status of "waking" computers.
 * The modal shows a loading spinner and a progress message indicating the number of computers that have been woken up.
 * It also optionally displays the "OU" (organizational unit) if available. This component must be used by setting the WakingModalData atom via Recoil.
 * 
 * @component
 * 
 * @returns {JSX.Element} A modal displaying progress of the waking process.
 */
export const WakingModal = () => {

  // State declarations
  const [data, setData] = useRecoilState<WakingModalData>(wakingModalDataAtom);
  const { show, ou, current = 0, total = 0 } = data;
  const handleClose = () => setData({ ...data, show: false });

  // Component body
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body className='text-center fw-bold'>
        Waking Computers
        <div className='mt-4 mb-3'><Spinner animation='border' /></div>
        <p className='fw-light mb-0'>{current || 0}/{total || 0} Woke</p>
        <p className={`fw-light mb-0 ${!ou ? "d-none" : ""}`}>OU: {ou}</p>
      </Modal.Body>
      <Modal.Footer>
        This may take up to a minute to complete. Please keep this window open until the operation finishes.
      </Modal.Footer>
    </Modal>
  )
}