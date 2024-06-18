import { create } from "zustand";

interface DialogState {
  isOpenDialogRCWeb: boolean;
  isOpenDialogRevature: boolean;
  setIsOpenDialogRCWEB: (dialogName: boolean) => void;
  setIsOpenDialogRevature: (dialogName: boolean) => void;
}

export const useDialogState = create<DialogState>((set) => ({
  isOpenDialogRCWeb: false,
  setIsOpenDialogRCWEB: (isOpen) => set({ isOpenDialogRCWeb: isOpen }),
  isOpenDialogRevature: false,
  setIsOpenDialogRevature: (isOpen) => set({ isOpenDialogRevature: isOpen }),
}));
