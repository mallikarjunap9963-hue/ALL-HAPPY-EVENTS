import { useState } from "react";

const LoginModal = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Login Data:", form);
    alert("Login Submitted!");
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">

          <h3 className="mb-3 text-center">Login</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              placeholder="Enter mobile number"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Submit
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginModal;