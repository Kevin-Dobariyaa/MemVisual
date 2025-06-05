import { PlusCircle, Settings } from "lucide-react";
import React, { useState } from "react";

function MemoryCreator({ createMemory }) {
  const [blockSize, setBlockSize] = useState(128);
  const [blocks, setBlocks] = useState([]);
  const [noBlock, setNoBlock] = useState(1);
  const [error, setError] = useState(null);

  const handleAdd = () => {
    if (noBlock <= 0 || blockSize <= 0) {
      setError("Block size and number of blocks must be greater than 0");
      return;
    }
    if (blocks.length == noBlock) {
      setError("You have already added the specified number of blocks");
      return;
    }

    setError(null);
    setBlocks((prevBlocks) => [...prevBlocks, blockSize]);
    setBlockSize(128);
  };

  const createMemoryy = () => {
      if (blocks.length === 0) {
        setError("Please add at least one block");
        return;
      }
      if (blocks.some((block) => block <= 0)) {
        setError("Block size must be greater than 0");
        return;
      }
      if (blocks.length !== noBlock) {
        setError(
          `You must add exactly ${noBlock} blocks, currently added ${blocks.length}`
        );
        return;
      }

      createMemory({ noBlock, blocks });
      setError(null);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Create Memory</h2>
        <div className="relative group">
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <Settings size={20} />
          </button>
          <div className="absolute right-0 w-64 bg-gray-800 text-white text-sm rounded p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
            Configure the total number block and block size (for static
            partition).
          </div>
        </div>
      </div>

      <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Blocks
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={noBlock}
                  onChange={(e) => setNoBlock(Number(e.target.value))}
                  className="input"
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Block Size (KB)
              </label>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="number"
                    value={blockSize}
                    onChange={(e) => setBlockSize(Number(e.target.value))}
                    className="input rounded-r-none"
                    min="1"
                  />
                  <div className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-gray-500">
                    KB
                  </div>
                </div>

                <button className="btn" onClick={() => handleAdd()}>
                  <PlusCircle size={18} className="mr-2" /> Create Block
                </button>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            {blocks.length > 0 && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Added Blocks
                </label>
                <div className="flex flex-wrap gap-2">
                  {blocks.map((block, index) => (
                    <span
                      key={index}
                      className="p-2 rounded-md bg-slate-100 text-sm font-medium text-gray-500 border border-gray-200 shadow-sm"
                    >
                      Block {index + 1}: {block} KB{" "}
                    </span>
                  ))}
                </div>
              </div>
            )}

        <button className="btn" onClick={() => createMemoryy()}>
          <span>Create Memory</span>
        </button>
      </div>
    </div>
  );
}

export default MemoryCreator;
