import React from "react";
import Button from "./Button";

interface teacherCardProps {
  name: string;
  text: string;
  imageUrl: string;
}

const TeacherCard = ({ name, text, imageUrl }: teacherCardProps) => {
  return (
    <div className="flex  p-5 flex-row border border-black mt-6">
      <img className="basis-1/3 w-56 h-72" src={imageUrl} alt="" />
      <div className="flex ml-5 flex-shrink flex-col">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="mt-5">{text}</p>
        <Button
          onClick={() => {
            alert(`${name} kontaktován`);
          }}
          type="primary"
        >
          Kontaktovat
        </Button>
      </div>
    </div>
  );
};

export default TeacherCard;
