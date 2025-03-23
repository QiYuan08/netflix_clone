import React from "react";
import { FcCheckmark } from "react-icons/fc";

export interface PricingCardProps {
  title: string;
  subtitle: string;
  img: string;
  description: string[];
  price: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  img,
  description,
  price,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-lg transition duration-500 ease-in-out hover:scale-105 lg:card-xl">
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="font-medium">{subtitle}</h3>
        {description.map((desc) => {
          return (
            <p className="flex items-center gap-2">
              <span>
                <FcCheckmark />
              </span>
              {desc}
            </p>
          );
        })}
        <div className="card-actions justify-end">
          <h3 className="font-semibold text-primary">{price}/mo</h3>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
