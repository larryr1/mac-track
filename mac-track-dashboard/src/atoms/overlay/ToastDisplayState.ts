import { atom } from "recoil";
import { ToastConfig } from "../../lib/ToastManager";

export const ToastDisplayStateAtom = atom<{ toasts: ToastConfig[]}>({
  key: 'toastDisplayState',
  default: {
    toasts: []
  }
})