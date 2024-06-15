import { create } from "zustand";

interface DialogState {
  isOpenDialog: boolean;
  setIsOpenDialog: (dialogName: boolean) => void;
}

export const useDialogState = create<DialogState>((set) => ({
  isOpenDialog: false,
  setIsOpenDialog: (isOpen) => set({ isOpenDialog: isOpen }),
}));
