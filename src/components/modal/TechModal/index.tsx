import React from "react";

interface TooltipProps {
  text: string;
}

const Tooltip = ({ text }: TooltipProps) => {    
  return (
    <div className="absolute z-50 overflow-visible w-full">
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md -mt-[108px] z-10 w-full flex justify-center dark:bg-black">
        <span className="block dark:text-[#F8F9FA]">{text}</span>
        <div className="w-4 h-4 bg-white absolute -bottom-2 left-1/2 transform -translate-x-2 -rotate-45 z-[-1] dark:bg-black"></div>
      </div>
    </div>
  );
};

export default Tooltip;
