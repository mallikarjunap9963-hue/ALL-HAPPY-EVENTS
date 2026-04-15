import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginState {
  token: string | null;
  otp: string[];
  timer: number;
  error: string;
  setToken: (token: string | null) => void;
  setOtp: (otp: string[]) => void;
  setError: (err: string) => void;
  startTimer: () => void;
  resetStore: () => void;
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      token: null,
      otp: ["", "", "", "", "", ""],
      timer: 0,
      error: "",

      setToken: (token) => set({ token }),
      setOtp: (otp) => set({ otp }),
      setError: (error) => set({ error }),

      startTimer: () => {
        set({ timer: 30 });
        const interval = setInterval(() => {
          set((state) => {
            if (state.timer <= 1) {
              clearInterval(interval);
              return { timer: 0 };
            }
            return { timer: state.timer - 1 };
          });
        }, 1000);
      },

      resetStore: () =>
        set({
          otp: ["", "", "", "", "", ""],
          timer: 0,
          error: "",
        }),
    }),
    { name: "auth-storage" }
  )
);