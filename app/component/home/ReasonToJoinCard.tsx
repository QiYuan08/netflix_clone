import React, { type ReactNode } from "react";
import type { IconType } from "react-icons";
import { PiTelevisionSimpleLight } from "react-icons/pi";

export interface ReasonToJoinCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ReasonToJoinCard: React.FC<ReasonToJoinCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="card w-full border border-primary bg-base-100 shadow-xs transition duration-700 card-md hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between gap-x-6">
          <p>{description}</p>

          <Icon size={60} className="hidden text-secondary md:block" />
        </div>
      </div>
    </div>
  );
};

export default ReasonToJoinCard;
