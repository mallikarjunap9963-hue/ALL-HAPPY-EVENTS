import { create } from "zustand";

type AuthStore = {
  step: "FORM" | "OTP";
  phone: string;
  otp: string[];
  timer: number;
  error: string;
  setStep: (step: "FORM" | "OTP") => void;
  setPhone: (phone: string) => void;
  setOtp: (otp: string[]) => void;
  setError: (err: string) => void;
  startTimer: (initial?: number) => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  step: "FORM",
  phone: "",
  otp: [],
  timer: 0,
  error: "",
  setStep: (step) => {
    localStorage.setItem("authStep", step);
    set({ step });
  },
  setPhone: (phone) => {
    localStorage.setItem("authPhone", phone);
    set({ phone });
  },
  setOtp: (otp) => set({ otp }),
  setError: (error) => set({ error }),
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
}));