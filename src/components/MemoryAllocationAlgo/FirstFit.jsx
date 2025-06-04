import React from "react";
import firstFit from "../../utilis/firstFit";
import { getProcessColor } from "../../utilis/color";

function FirstFit({ processCart, memory, partitionType }) {
  const newMemory = firstFit(partitionType, memory, processCart);
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        First Fit Memory Allocation
      </h2>
      <div className="overflow-x-auto w-full py-4">
        <div className="flex space-x-1 min-w-max px-2">
          {newMemory.map((block, index) => (
            <div
              key={index}
              className=" text-[11px] text-gray-500 z-100 font-medium bg-gray-100 flex items-center justify-between rounded-md shadow-sm border-2 border-gray-200 px-1"
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
                    <span>
                      {processCart[block.processId].size} KB
                    </span>
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
                <div className="flex items-center justify-center w-full">{block.size} KB</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FirstFit;
