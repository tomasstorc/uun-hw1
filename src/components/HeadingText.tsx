import React from "react";

interface headingProps {
  children: React.ReactNode;
}

const HeadingText = ({ children }: headingProps) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

export default HeadingText;
