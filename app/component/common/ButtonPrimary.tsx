import React from "react";

interface ButtonPrimaryProps {
  style?: "btn-outline" | "btn-soft" | "btn-primary";
  onClick?: () => {};
  rounded?: boolean;
  text: String;
  color?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  onClick,
  color = "",
  rounded = true,
  style = "btn-outline",
}) => {
  return (
    <button
      className={`btn ${style} ${color} ${rounded ? "rounded-3xl" : "rounded-md"}`}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
