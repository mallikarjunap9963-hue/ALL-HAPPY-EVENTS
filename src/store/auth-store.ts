import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  step: "FORM" | "OTP";
  phone: string;
  otp: string[];
  timer: number;
  error: string;
  token: string | null;

  setStep: (step: "FORM" | "OTP") => void;
  setPhone: (phone: string) => void;
  setOtp: (otp: string[]) => void;
  setError: (err: string) => void;
  setToken: (token: string | null) => void;
  startTimer: (initial?: number) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      step: "FORM",
      phone: "",
      otp: [],
      timer: 0,
      error: "",
      token: null,

      setStep: (step) => set({ step }),
      setPhone: (phone) => set({ phone }),
      setOtp: (otp) => set({ otp }),
      setError: (error) => set({ error }),
      setToken: (token) => set({ token }),

      startTimer: (initial = 30) => {
        set({ timer: initial });
        const interval = setInterval(() => {
          const current = get().timer;
          if (current <= 1) {
            clearInterval(interval);
            set({ timer: 0 });
          } else {
            set({ timer: current - 1 });
          }
        }, 1000);
      },
    }),
    {
      name: "auth-storage",
    }
  )
);