import { create } from "zustand";

interface NavigateStore {
  isNavigating: boolean;
  setIsNavigating: (isNavigating: boolean) => void;
}

const useNavigateStore = create<NavigateStore>((set) => ({
  isNavigating: false,
  setIsNavigating: (isNavigating: boolean) => set({ isNavigating }),
}));

export default useNavigateStore;
  