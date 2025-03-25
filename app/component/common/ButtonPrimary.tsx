import React from "react";

interface ButtonPrimaryProps {
  style?: "btn-outline" | "btn-soft" | "btn-primary";
  onClick?: () => void;
  rounded?: boolean;
  text: String;
  color?: string;
  type?: "submit" | "button" | "reset",
  className?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  onClick,
  color = "",
  type = "button",
  rounded = true,
  className = "",
  style = "btn-outline",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${style} ${color} ${className} ${rounded ? "rounded-3xl" : "rounded-md"}`}
    >
      {text}
    </button >
  );
};

export default ButtonPrimary;
