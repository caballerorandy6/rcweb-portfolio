import { create } from "zustand";

interface DialogState {
  isOpenDialogRCWeb: boolean;
  isOpenDialogRevature: boolean;
  isOpenExperienceDialog: boolean;
  isOpenProjectsDialog: boolean;
  isOpenAboutDialog: boolean;
  isOpenDialog: boolean;
  setIsOpenDialogRCWEB: (dialogName: boolean) => void;
  setIsOpenDialogRevature: (dialogName: boolean) => void;
  setIsOpenExperienceDialog: (dialogName: boolean) => void;
  setIsOpenProjectsDialog: (dialogName: boolean) => void;
  setIsOpenAboutDialog: (dialogName: boolean) => void;
  setIsOpenDialog: (dialogName: boolean) => void;
}

export const useDialogState = create<DialogState>((set) => ({
  isOpenDialogRCWeb: false,
  setIsOpenDialogRCWEB: (isOpen) => set({ isOpenDialogRCWeb: isOpen }),
  isOpenDialogRevature: false,
  setIsOpenDialogRevature: (isOpen) => set({ isOpenDialogRevature: isOpen }),
  isOpenExperienceDialog: false,
  setIsOpenExperienceDialog: (isOpen) =>
    set({ isOpenExperienceDialog: isOpen }),
  isOpenProjectsDialog: false,
  setIsOpenProjectsDialog: (isOpen) => set({ isOpenProjectsDialog: isOpen }),
  isOpenAboutDialog: false,
  setIsOpenAboutDialog: (isOpen) => set({ isOpenAboutDialog: isOpen }),
  isOpenDialog: false,
  setIsOpenDialog(dialogName) {
    set({ isOpenDialog: dialogName });
  },
}));
