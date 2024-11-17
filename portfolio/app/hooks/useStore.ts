import { create } from "zustand";

interface StatusState {
  ready: boolean;
  setReady: () => void;
}

const useStore = create<StatusState>()((set) => ({
  ready: false,
  setReady: () => set({ ready: true }),
}));

export { useStore };
