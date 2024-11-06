import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useSetRecoilState } from 'recoil';
import { WakeOuModalDataAtom, WakeOuModalDefaultData } from '../atoms/modals/WakeOuModalState';
import { WakeAllModalDataAtom } from '../atoms/modals/WakeAllModalState';

export const AppNav = () => {

  const setWakeOuModalData = useSetRecoilState(WakeOuModalDataAtom);
  const setWakeAllModalData = useSetRecoilState(WakeAllModalDataAtom);

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Mac Track Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='me-auto'>
            <NavDropdown title="Wake Computers" id="wake-dropdown">
              <NavDropdown.Item href="#wake-all" onClick={() => { setWakeAllModalData({ show: true })}}>All Computers</NavDropdown.Item>
              <NavDropdown.Item href="#wake-by-ou" onClick={() => { setWakeOuModalData({ ...WakeOuModalDefaultData, show: true })}}>By OU</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#scheduled-wakes">Scheduled Wakes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>Signed in as: <a href="#login">Anonymous</a></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}