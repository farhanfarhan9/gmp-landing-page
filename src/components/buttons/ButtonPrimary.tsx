import React from "react";

const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-11 py-4 text-white bg-green-800 mt-7 hover:bg-green-700 transition-colors duration-150">
      {children}
    </button>
  );
};

export default ButtonPrimary;
