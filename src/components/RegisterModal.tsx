import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerSchema, type RegisterFormInputs } from "../schema/auth-schema";
import { registerUser } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";

const RegisterModal = () => {
  const { modalOpen, closeModal, setUser } = useAuthStore();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: RegisterFormInputs) => registerUser(data),
    onSuccess: (res: any) => {
      setUser(res.data.user, res.data.token);
      reset();
      closeModal();
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || "Registration failed");
    },
  });

  const onSubmit = (data: RegisterFormInputs) => mutation.mutate(data);

  if (!modalOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register("name")} />
          <p className="error">{errors.name?.message}</p>

          <input placeholder="Email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>

          <input placeholder="Phone" {...register("phone")} />
          <p className="error">{errors.phone?.message}</p>

          <input placeholder="Password" type="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>

          <button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Registering..." : "Register"}
          </button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;