import { Popover } from "react-bootstrap"

export const EthernetLanPopover = (
  <Popover id="active-directory-ou-notice-popover" className='text-warning'>
    <Popover.Header>Wake Requirements</Popover.Header>
    <Popover.Body className='text-warning'>
      Computers must be connected to the network via Ethernet LAN to be woken up. Mac Track will switch a computer to Ethernet from Wi-Fi when the computer is restarted.
    </Popover.Body>
  </Popover>
)