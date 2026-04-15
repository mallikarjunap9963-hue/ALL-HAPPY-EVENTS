import axios from "axios";
import { useLoginStore } from "../store/login-store";

const api = axios.create({
  baseURL: "YOUR_BASE_URL",
});

api.interceptors.request.use((config) => {
  const token = useLoginStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const sendOtp = (phone: string) => {
  return api.post("/send-otp", { phone_number: phone });
};

export const verifyOtp = (data: {
  phone_number: string;
  otp: string;
}) => {
  return api.post("/verify-otp", data);
};

export const resendOtp = (phone: string) => {
  return api.post("/resend-otp", { phone_number: phone });
};