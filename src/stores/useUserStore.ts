import { create } from "zustand";

interface UserType {
  name: string | null;
  email: string | null;
}

interface UserState {
  user: UserType | null;
  isLoggedIn: boolean | null;
  isLoading: boolean;

  setUser: (value: UserType | null) => void
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: true,

  setUser(user) {
    set({user: user, isLoggedIn: !!user, isLoading: false})
  },
}))

export default useUserStore;