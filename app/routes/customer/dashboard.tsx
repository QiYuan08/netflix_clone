import { useState } from "react";

export default function dashboard() {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div
        className="hover:tranform-110 overflow-hidden transition duration-300"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
    </div>
  );
}
