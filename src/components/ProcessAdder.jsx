import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

function ProcessAdder({ addProcessToCart, processCart }) {
  const [error, setError] = useState(null);

  const [processName, setProcessName] = useState("Process 1");
  const [processSize, setProcessSize] = useState(64);

  const handleAddProcess = () => {
    if (!processName.trim()) {
      setError("Process name cannot be empty");
      return;
    }
    if (processSize <= 0) {
      setError("Process size must be greater than 0");
      return;
    }
    const existingProcess = processCart.find((p) => p.name === processName);

    if (existingProcess) {
      setError("Process with this name already exists in the cart");
      return;
    }

    setError(null);

    addProcessToCart({ name: processName, size: processSize });

    setProcessName("Process " + (processCart.length + 2));
    setProcessSize(64);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4 z-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Process</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Process Name
          </label>
          <input
            type="text"
            value={processName}
            onChange={(e) => setProcessName(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Process Size (KB)
          </label>
          <div className="flex items-center">
            <input
              type="number"
              value={processSize}
              onChange={(e) => setProcessSize(Number(e.target.value))}
              className="input rounded-r-none"
              min="1"
            />
            <div className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-gray-500">
              KB
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button onClick={handleAddProcess} className="btn">
          <PlusCircle size={18} className="mr-2" />
          <span>Add Process</span>
        </button>
      </div>
    </div>
  );
}

export default ProcessAdder;
