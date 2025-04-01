import React from "react";

export interface SelectProps {
  options: [];
  onChange: (e: React.ChangeEvent) => void;
  value: number;
}

const Select = () => {
  return (
    <select className="select">
      <option>You can't touch this</option>
      <option>Malaysia</option>
    </select>
  );
};

export default Select;
