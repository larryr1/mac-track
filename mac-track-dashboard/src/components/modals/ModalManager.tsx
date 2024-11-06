import { WakeAllModal } from "./wake-all-modal/WakeAllModal"
import { WakeOuModal } from "./wake-ou-modal/WakeOuModal"
import { WakingModal } from "./waking-modal/WakingModal"

export const ModalManger = () => {
  return (
    <div>
      <WakingModal />
      <WakeOuModal />
      <WakeAllModal />
    </div>
  )
}