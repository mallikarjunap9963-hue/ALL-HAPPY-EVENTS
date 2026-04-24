import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/user-auth";
import { useNavigate } from "react-router-dom";
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().length(10, "Phone must be 10 digits"),
});
const Register = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (data) => {
        navigate("/verify-otp?phone=" + data.phone);
      },
      onError: (err: any) => alert(err.message),
    });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter Name" {...register("name")} />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Enter Email" {...register("email")} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder="Enter Phone" maxLength={10} {...register("phone")} />
            {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
            {isPending ? "Sending OTP..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;