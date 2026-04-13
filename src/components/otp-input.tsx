import React, { useRef } from "react";

type Props = {
  length?: number;
  otp: string[];
  setOtp: (otp: string[]) => void;
};

const OtpInput: React.FC<Props> = ({ length = 6, otp, setOtp }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasteData)) return;

    const pasteArray = pasteData.slice(0, length).split("");
    const newOtp = [...otp];

    pasteArray.forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);
    focusInput(Math.min(pasteArray.length, length - 1));
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          value={otp[i] || ""}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          maxLength={1}
          inputMode="numeric"
          style={{
            width: "48px",
            height: "52px",
            textAlign: "center",
            fontSize: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;