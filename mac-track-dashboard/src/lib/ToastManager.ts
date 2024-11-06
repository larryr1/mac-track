import { SetterOrUpdater } from "recoil";

export interface ToastConfig {
  title: string;
  message: string;
  delay: number;
  variant: string;
  id?: number;
}

let toasts: ToastConfig[] = [];

export const AddToast = (setter: SetterOrUpdater<{toasts: ToastConfig[]}>, object: ToastConfig) => {
  const id = object.id || Date.now();
  toasts = [...toasts, {...object, id: id}];
  setTimeout(() => {
    toasts = toasts.filter((toast) => (toast.id !== id));
    setter({ toasts: toasts });
  }, object.delay);

  setter({ toasts: toasts });
}