import type React from "react";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export interface PasswordImportProps {
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: string;
}

const PasswordInput = ({
  name = "",
  value,
  onChange,
  size = "input-md",
}: PasswordImportProps) => {
  const [inputType, setInputType] = useState<string>("password");

  const handleInputTypeChange = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }

    setInputType("password");
  };

  return (
    <label className="input">
      <input
        name={name}
        value={value}
        type={inputType}
        onChange={onChange}
        placeholder="password"
        className={` ${size} grow placeholder:text-base`}
      />
      {inputType === "password" ? (
        <FaEyeSlash
          onClick={() => {
            handleInputTypeChange();
          }}
          className="cursor-pointer"
        />
      ) : (
        <FaEye
          onClick={() => {
            handleInputTypeChange();
          }}
          className="cursor-pointer"
        />
      )}
      {/* <kbd className="kbd kbd-sm">⌘</kbd> */}
      {/* <kbd className="kbd kbd-sm">K</kbd> */}
    </label>
  );
};

export default PasswordInput;
