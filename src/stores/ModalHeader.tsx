import create from "zustand";
type modalProps = {
  opened: boolean;
  setOpened: () => void;
};
export const modalHeader = create<modalProps>((set) => ({
  opened: false,

  setOpened: () => set({ opened: true }),
}));
