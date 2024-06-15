import { create } from "zustand";

interface ActiveSection {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useActiveSection = create<ActiveSection>((set) => ({
  activeSection: "Home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
