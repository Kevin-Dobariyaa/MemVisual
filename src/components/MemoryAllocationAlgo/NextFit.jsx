import React from "react";
import nextFit from "../../utilis/nextFit";
import Static from "./Static";
import Dynamic from "./Dynamic";
import { BookOpen } from "lucide-react";
import FragmentationDisplay from "./FragmentationDisplay";

function NextFit({ processCart, memory, partitionType }) {
  const res = nextFit(partitionType, memory, processCart);
  const newMemory = res.mem;
  const { IF, EF, EFProcess } = res;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="relative">
        <div className="flex items-center justify-start mb-1 mt-4 ml-2 gap-2">
          <h2 className="text-2xl font-bold text-gray-600">Next Fit</h2>
          <div className="relative group ml-2">
            <button className="text-gray-500 hover:text-blue-500 transition-colors mt-2.5">
              <BookOpen size={20} />
            </button>
            <div className="absolute right-0 w-64 bg-gray-800 text-white text-sm rounded p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
              It allocates the next available memory block that is large enough
              to accommodate the process starting from the last placed block
            </div>
          </div>
        </div>
        <div className="overflow-x-auto w-full py-4">
          <div className="flex space-x-1 min-w-max px-2">
            {partitionType === "static" && (
              <Static newMemory={newMemory} processCart={processCart} />
            )}
            {partitionType === "dynamic" && (
              <Dynamic newMemory={newMemory} processCart={processCart} />
            )}
          </div>
        </div>
        <div className="absolute right-0 w-10 bottom-3.5 h-[50%] bg-gradient-to-r from-transparent to-zinc-50" />
      </div>
      <div className="mt-4 mx-2">
        <FragmentationDisplay
          IF={IF}
          EF={EF}
          EFProcess={EFProcess}
          processCart={processCart}
        />
      </div>
    </div>
  );
}

export default NextFit;
