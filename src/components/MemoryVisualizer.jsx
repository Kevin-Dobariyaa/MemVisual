import React from "react";
import { Info } from "lucide-react";

function MemoryVisualizer({ partitionType, memory }) {
  if (!memory) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Memory Visualization
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {partitionType === "static"
                ? "Static Partition"
                : "Dynamic Partition"}
            </span>
            <span className=" hidden sm:block bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-sm">
              0 KB Total
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
          <Info size={48} className="mb-2" />
          <p>Your process cart is empty</p>
          <p className="text-sm">Add processes to allocate them to memory</p>
        </div>
      </div>
    );
  }

  let { blocks } = memory;
  let totalSize = 0;

  for (let val of blocks) {
    totalSize += val;
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Memory Visualization
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {partitionType === "static"
              ? "Static Partition"
              : "Dynamic Partition"}
          </span>
          <span className="hidden sm:block bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-sm">
            {totalSize} KB Total
          </span>
        </div>
      </div>

      <div className="overflow-x-auto w-full py-4">
        <div className="flex space-x-1 min-w-max px-2">
          {blocks.map((size, index) => (
            <div
              key={index}
              className="font-medium text-gray-600 bg-gray-100 flex items-center justify-center rounded-md shadow-sm border-2 border-gray-200"
              style={{
                width: `${size+10}px`, // control width per size (tweak as needed),
                minWidth: "60px", // prevent too small blocks
                height: "60px",
              }}
            >
              {size} KB
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemoryVisualizer;
