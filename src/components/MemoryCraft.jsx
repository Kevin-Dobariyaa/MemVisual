import React from "react";
import FirstFit from "./MemoryAllocationAlgo/FirstFit";
import NextFit from "./MemoryAllocationAlgo/NextFit";
import BestFit from "./MemoryAllocationAlgo/BestFit";
import WorstFit from "./MemoryAllocationAlgo/WorstFit";
import { MemoryStick } from "lucide-react";

function MemoryCraft({ partitionType, memory, processCart }) {
  if (processCart.length === 0 || !memory) {
    let totalSize = 0;
    if (memory && memory.blocks) {
      totalSize = memory.blocks.reduce((acc, val) => acc + val, 0);
    }
    return (
      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Memory Allocation
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {partitionType === "static"
                ? "Static Partition"
                : "Dynamic Partition"}
            </span>
            <span className="hidden md:block text-sm bg-gray-100 px-2 py-1 rounded-md">
              {totalSize} KB Total
            </span>
            <span className="hidden md:block text-sm bg-gray-100 px-2 py-1 rounded-md">
              {processCart.length}{" "}
              {processCart.length === 1 ? "process" : "processes"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
          <MemoryStick size={48} className="mb-2" />
          <p> You haven’t added any memory yet</p>
          <p className="text-sm">
            Create Memory and Add processes to allocate them to memory
          </p>
        </div>
      </div>
    );
  }

  const { blocks } = memory;
  let totalSize = 0;
  for (let val of blocks) {
    totalSize += val;
  }
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Memory Allocation</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {partitionType === "static"
              ? "Static Partition"
              : "Dynamic Partition"}
          </span>
          <span className="hidden md:block bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-sm">
            {totalSize} KB Total
          </span>
          <span className="hidden md:block bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-sm">
            {processCart.length}{" "}
            {processCart.length === 1 ? "process" : "processes"}
          </span>
        </div>
      </div>

      <div>
        <div>
          <FirstFit processCart={processCart} memory={memory} partitionType={partitionType} />
        </div>
        {/* <div>
          <FirstFit />
        </div>
        <div>
          <FirstFit />
        </div>
        <div>
          <FirstFit />
        </div> */}
      </div>
    </div>
  );
}

export default MemoryCraft;
