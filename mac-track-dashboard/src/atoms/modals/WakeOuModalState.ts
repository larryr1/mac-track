import { atom } from "recoil";
import { WakeOuModalData } from "../../components/modals/wake-ou-modal/WakeOuModal";

export const WakeOuModalDefaultData: WakeOuModalData = {
  show: false,
  ouOption: undefined,
  accountOption: undefined,
}

export const WakeOuModalDataAtom = atom<WakeOuModalData>({
  key: 'wakeOuModalData',
  default: WakeOuModalDefaultData
});