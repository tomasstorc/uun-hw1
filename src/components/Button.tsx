import React from "react";

interface buttonProps {
  type: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
}
const buttonStyles = {
  primary: "bg-stone-300 px-6 text-white border border-black",
  secondary: "bg-white",
};

const Button = ({ type, onClick, children }: buttonProps): JSX.Element => {
  return (
    <div>
      <button
        className={
          type === "primary" ? buttonStyles.primary : buttonStyles.secondary
        }
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
