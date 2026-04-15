import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { registerSchema } from "../schema/auth-schema";
import type { RegisterFormInputs } from "../schema/auth-schema";
import { registerUser, verifyOtp, resendOtp } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";
import OtpInput from "../components/otp-input";
import "../assets/css/style.css";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOtpPage = location.pathname.includes("/otp");
  const [searchParams] = useSearchParams();
  const phoneFromUrl = searchParams.get("phone") || "";

  const { otp, timer, error, setOtp, setError, startTimer, setToken } =
    useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (_, variables) => {
      navigate(
        `/register/otp?country_code=91&phone=${variables.phone_number}`,
        { replace: true }
      );
      startTimer(30);
    },
    onError: (err: any) =>
      setError(err?.response?.data?.message || "Registration failed"),
  });

  const verifyMutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (res: any) => {
      const token = res?.data?.data?.token;

      if (!token) return setError("Invalid OTP");

      setToken(token);
      navigate("/");
    },
    onError: (err: any) =>
      setError(err?.response?.data?.message || "Invalid OTP"),
  });

  const onSubmit = (data: RegisterFormInputs) =>
    registerMutation.mutate(data);

  const handleVerify = () => {
    if (otp.join("").length !== 6) {
      setError("Enter valid OTP");
      return;
    }

    verifyMutation.mutate({
      phone_number: phoneFromUrl,
      otp: otp.join(""),
    });
  };

  const handleResend = async () => {
    await resendOtp(phoneFromUrl);
    startTimer(30);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}

        {!isOtpPage && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Full Name" {...register("name")} />
            <p>{errors.name?.message}</p>

            <input placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input placeholder="Phone" {...register("phone_number")} />
            <p>{errors.phone_number?.message}</p>

            <button type="submit">Send OTP</button>
          </form>
        )}

        {isOtpPage && (
          <>
            <p>OTP sent to {phoneFromUrl}</p>
            <OtpInput otp={otp} setOtp={setOtp} />

            <button onClick={handleVerify}>Verify</button>

            {timer > 0 ? (
              <p>Resend in {timer}s</p>
            ) : (
              <button onClick={handleResend}>Resend OTP</button>
            )}

            <button onClick={() => navigate("/register")}>
              Change Number
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;