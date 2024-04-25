"use client";

import { useState } from "react";

const Tooltip = ({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className="absolute z-50 w-72 text-sm bottom-7 left-0 p-2 bg-gray-400 text-white rounded-md shadow-sm transition duration-200 ease-in-out transform scale-0 group-hover:scale-100">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
