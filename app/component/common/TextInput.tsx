import React from "react";

interface TextInputProps {
  placeholder: string;
  type: string;
  value?: any;
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "input-sm" | "input-md" | "input-xl" | "input-lg";
}

const TextInput: React.FC<TextInputProps> = ({
  name = "",
  value,
  onChange,
  placeholder,
  type = "text",
  size = "input-md",
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${size} placeholder:text-base`}
    />
  );
};

export default TextInput;
