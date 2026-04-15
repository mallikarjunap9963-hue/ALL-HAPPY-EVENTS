import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { sendOtp, verifyOtp, resendOtp } from "../api/auth-api";
import OtpInput from "../components/otp-input";
import { useAuthStore } from "../store/auth-store";
import "../assets/css/style.css";

const loginSchema = z.object({
  phone_number: z.string().length(10, "Phone number must be 10 digits"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOtpPage = location.pathname.includes("/otp");
  const [searchParams] = useSearchParams();
  const phoneFromUrl = searchParams.get("phone") || "";

  const { setToken } = useAuthStore();

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    setError("");
  }, [location.pathname]);

  const startTimer = () => {
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtpMutation = useMutation({
    mutationFn: (data: LoginFormInputs) =>
      sendOtp("+91" + data.phone_number),
    onSuccess: (_, variables) => {
      navigate(`/login/otp?phone=${variables.phone_number}`, {
        replace: true,
      });
      startTimer();
    },
    onError: (err: any) =>
      setError(err.response?.data?.message || "User not found"),
  });

  const verifyMutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (res: any) => {
      const token = res?.data?.data?.token;
      if (!token) return setError("Login failed");
      setToken(token);
      navigate("/", { replace: true });
    },
    onError: (err: any) =>
      setError(err.response?.data?.message || "Invalid OTP"),
  });

  const onSubmit = (data: LoginFormInputs) => {
    sendOtpMutation.mutate(data);
  };

  const handleVerify = () => {
    if (otp.join("").length !== 6) {
      setError("Enter valid OTP");
      return;
    }

    verifyMutation.mutate({
      phone_number: "+91" + phoneFromUrl,
      otp: otp.join(""),
    });
  };

  const handleResend = async () => {
    if (timer > 0) return;
    await resendOtp("+91" + phoneFromUrl);
    startTimer();
  };

  const handleChangeNumber = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(0);
    setError("");
    navigate("/login", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h3>Login</h3>
        {error && <p className="error">{error}</p>}

        {!isOtpPage && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Phone Number" {...register("phone_number")} />
            <p>{errors.phone_number?.message}</p>
            <button type="submit" disabled={sendOtpMutation.isPending}>
              Send OTP
            </button>
          </form>
        )}

        {isOtpPage && (
          <>
            <p>OTP sent to +91{phoneFromUrl}</p>
            <OtpInput otp={otp} setOtp={setOtp} />
            <button onClick={handleVerify} disabled={verifyMutation.isPending}>
              Verify OTP
            </button>

            {timer > 0 ? (
              <p>Resend in {timer}s</p>
            ) : (
              <button onClick={handleResend}>Resend OTP</button>
            )}

            <button onClick={handleChangeNumber}>
              Change Number
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;