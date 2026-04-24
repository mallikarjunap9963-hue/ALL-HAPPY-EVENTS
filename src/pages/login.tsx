import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver,} from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import PhoneInput from "../components/phone-otp";
import { useSendOtp } from "../hooks/user-auth";
const schema = z.object({
  phone: z.string().length(10, "Phone must be 10 digits"),
});
const Login = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useSendOtp();
  const {register,handleSubmit,formState: { errors },}=useForm({resolver: zodResolver(schema),});
  const onSubmit = (data: any) => {
    mutate(data.phone, {
      onSuccess: (data) => {
        console.log("SEND OTP API =>", data.formattedPhone);
        navigate("/verify-otp?phone=" + data.formattedPhone );
      },
    });
  };
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>
        {error && (
          <div className="alert alert-danger text-center py-2">
            {(error as any).message}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <PhoneInput register={register} error={errors.phone?.message}/>
          <button className="btn btn-primary w-100" disabled={isPending}>
            {isPending ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;