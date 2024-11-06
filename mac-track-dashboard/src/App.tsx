import { useSetRecoilState } from "recoil";
import { AppNav } from "./components/AppNav";
import { MasterComputersTable } from "./components/MasterComputersTable";
import { ModalManger } from "./components/modals/ModalManager";
import { ToastDisplayStateAtom } from "./atoms/overlay/ToastDisplayState";

function App() {

  return (
    <div>
      <AppNav />
      <div style={{padding: '1em'}}>
        <MasterComputersTable />
        <ModalManger />
      </div>
    </div>
  )
}

export default App
