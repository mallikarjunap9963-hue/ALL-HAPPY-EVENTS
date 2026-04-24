type Props = {
  register: any;
  error?: string;
};
const OtpInput = ({ register, error }: Props) => {
  return (
    <div>
      <input type="text" maxLength={6} className="form-control mb-2" {...register("otp")}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default OtpInput;