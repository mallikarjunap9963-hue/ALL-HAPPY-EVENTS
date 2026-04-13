import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const schema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Only letters and numbers allowed"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "At least one lowercase letter required")
    .regex(/[A-Z]/, "At least one uppercase letter required")
    .regex(/[0-9]/, "At least one number required")
    .regex(/[^A-Za-z0-9]/, "At least one special character required"),
});

type FormData = z.infer<typeof schema>;

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Login Successful");
    onClose();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-close" onClick={onClose}>
          ×
        </button>

        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-group">
            <label>Username</label>
            <input {...register("username")} />
            {errors.username && (
              <p className="login-error">{errors.username.message}</p>
            )}
          </div>

          <div className="login-group">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <span
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.password && (
              <p className="login-error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
