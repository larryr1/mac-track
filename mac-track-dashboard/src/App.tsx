import { Box, Paper } from "@mui/material";
import { AppNav } from "./components/AppNav";
import { MasterComputersTable } from "./components/MasterComputersTable";
import { WakeByOU_Modal } from "./components/modals/WakeByOUModal/Wake-OU-Modal";
import { WakeAll_Modal } from "./components/modals/WakeAll_Modal/WakeAll_Modal";
import { WakingModal } from "./components/modals/Waking_Modal/WakingModal";


function App() {
  return (
    <div>
      <AppNav />
      <div style={{padding: '1em'}}>
        <MasterComputersTable />
        <WakeByOU_Modal />
        <WakeAll_Modal />
        <WakingModal show={true} total={256} current={28} ou={"All Computers"} />
      </div>
    </div>
  )
}

export default App
