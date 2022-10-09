import React from "react";

interface infoBoxProps {
  title: string;
  value: number;
  unit?: string;
}

const InfoBox = ({ title, value, unit }: infoBoxProps): JSX.Element => {
  return (
    <div className=" flex flex-col justify-center border border-black w-48 h-24">
      <div className="mx-auto">{title}</div>
      <div className="mx-auto">
        {value}
        {unit && unit}
      </div>
    </div>
  );
};

export default InfoBox;
