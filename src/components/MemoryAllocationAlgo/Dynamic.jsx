import React from "react";
import { getProcessColor } from "../../utilis/color";

function Dynamic({ newMemory, processCart }) {
  return (
    <>
      {newMemory.map((block, index) => (
        <div
          key={index}
          className=" text-[11px] text-gray-500 z-100 cursor-pointer font-medium bg-gray-100 flex items-center justify-between rounded-md shadow-sm border-2 border-gray-200 px-0.5 pl-1 hover:transform hover:scale-105 transition-all duration-200 ease-in-out"
          style={{
            width: `${block.size + 10}px`,
            minWidth: "60px",
            height: "60px",
          }}
        >
          {block.processId.map((id, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-md border border-gray-300 mr-0.5"
              style={{
                backgroundColor: getProcessColor(id),
                width: `${processCart[id].size}px`,
                minWidth: "30px",
                height: "50px",
              }}
            >
              <span>{processCart[id].size} KB</span>
            </div>
          ))}
          {block.remain !== 0 && (
            <div
              className="flex items-center justify-center w-full"
              style={{
                width: `${block.remain}px`,
                minWidth: "30px",
                height: "50px",
              }}
            >
              {block.remain} KB
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Dynamic;
