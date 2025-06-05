import React from "react";
import { getProcessColor } from "../../utilis/color";

function Static({ newMemory, processCart }) {
  return (
    <>
      {newMemory.map((block, index) => (
        <div
          key={index}
          className=" text-[11px] text-gray-500 z-100 cursor-pointer font-medium bg-gray-100 flex items-center justify-between rounded-md shadow-sm border-2 border-gray-200 px-1 hover:transform hover:scale-105 transition-all duration-200 ease-in-out"
          style={{
            width: `${block.size + 10}px`,
            minWidth: "60px",
            height: "60px",
          }}
        >
          {block.processId !== -1 ? (
            <>
              <div
                className="flex items-center justify-center rounded-md border border-gray-300"
                style={{
                  backgroundColor: getProcessColor(block.processId),
                  width: `${processCart[block.processId].size}px`,
                  minWidth: "30px",
                  height: "50px",
                }}
              >
                <span>{processCart[block.processId].size} KB</span>
              </div>
              {block.size - processCart[block.processId].size !== 0 && (
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: `${
                      block.size - processCart[block.processId].size
                    }px`,
                    minWidth: "30px",
                    height: "50px",
                  }}
                >
                  {block.size - processCart[block.processId].size} KB
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center w-full">
              {block.size} KB
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Static;
