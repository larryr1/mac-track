import { atom } from "recoil";

export const wakeAllModalVisibleAtom = atom({
  key: 'wakeAllModalVisible', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const wakeOUModalVisibleAtom = atom({
  key: 'wakeOUModalVisible', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});