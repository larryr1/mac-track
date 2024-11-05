import { atom } from "recoil";
import { WakingModalData } from "../../components/modals/Waking_Modal/WakingModal";

export const wakingModalVisibleAtom = atom({
  key: 'wakingModalVisible', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const wakingModalDataAtom = atom<WakingModalData>({
  key: 'wakingModalData', // unique ID (with respect to other atoms/selectors)
  default: {
    show: false,
    ou: "",
    current: 0,
    total: 0
  }, // default value (aka initial value)
});