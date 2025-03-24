import React from "react";

interface TextInputProps {
  placeholder: string;
  type: string;
  value: any;
  onChange?: () => {};
  size?: "input-sm" | "input-md" | "input-xl" | "input-lg";
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  size = "input-md",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${size} placeholder:text-base`}
    />
  );
};

export default TextInput;
