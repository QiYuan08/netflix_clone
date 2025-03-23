import React from "react";

interface TextInputProps {
  placeholder: string;
  type: string;
  size: "input-sm" | "input-md" | "input-xl" | "input-lg";
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type = "text",
  size = "input-md",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${size} placeholder:text-base`}
    />
  );
};

export default TextInput;
