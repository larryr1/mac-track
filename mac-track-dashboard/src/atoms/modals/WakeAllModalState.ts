import { atom } from "recoil";
import { WakeAllModalData } from "../../components/modals/wake-all-modal/WakeAllModal";


export const WakeAllModalDataAtom = atom<WakeAllModalData>({
  key: 'wakeAllModalData',
  default: {
    show: false,
  }
});