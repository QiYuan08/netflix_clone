import React, { useState } from "react";

interface AccordianJoinedItem {
  title: string;
  description: string;
}

export interface AccordianJoinedProps {
  items: AccordianJoinedItem[];
}

const AccordianJoined: React.FC<AccordianJoinedProps> = ({ items }) => {
  const [checked, setChecked] = useState<boolean[]>(
    Array.from({ length: items.length }, () => false),
  );

  return (
    <div className="join-vertical join bg-base-100">
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="collapse-arrow collapse join-item cursor-pointer border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion-4"
              checked={checked[idx]}
              onClick={() => {
                setChecked((e) => {
                  let lastValue = checked[idx];
                  let newChecked = Array.from(
                    { length: items.length },
                    () => false,
                  );
                  newChecked[idx] = !lastValue;

                  console.log(newChecked);
                  return newChecked;
                });
              }}
            />
            <div className="collapse-title font-semibold">{item.title}</div>
            <div className="collapse-content text-sm">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordianJoined;
