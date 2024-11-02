import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import style from './AppNav.module.css';
import { wakeAllModalVisibleAtom, wakeOUModalVisibleAtom } from '../atoms/ModalStates';
import { useRecoilState } from 'recoil';

export const AppNav = () => {
  const [_wakeAllModalVisible, setWakeAllModalVisible] = useRecoilState(wakeAllModalVisibleAtom);
  const [_wakeOUModalVisible, setWakeOUModalVisible] = useRecoilState(wakeOUModalVisibleAtom);

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Mac Track Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='me-auto'>
            <NavDropdown title="Wake Computers" id="wake-dropdown">
              <NavDropdown.Item href="#wake-all" onClick={() => {setWakeAllModalVisible(true)}}>All Computers</NavDropdown.Item>
              <NavDropdown.Item href="#wake-by-ou" onClick={() => {setWakeOUModalVisible(true)}}>By OU</NavDropdown.Item>
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