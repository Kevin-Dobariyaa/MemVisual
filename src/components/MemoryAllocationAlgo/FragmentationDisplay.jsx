import React, { useState } from "react";
import { X } from "lucide-react";
import { getProcessColor } from "../../utilis/color";

function FragmentationDisplay({ IF, EF, EFProcess, processCart }) {
  const [showEFPopup, setShowEFPopup] = useState(false);

  // Get
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-gray-600 ml-0.5">
        Memory Fragmentation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink lg:shrink-0">
        {/* Internal Fragmentation */}
        <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-blue-800">
              Internal Fragmentation
            </h3>
            <span className="text-xl font-bold text-blue-600">{IF} KB</span>
          </div>
          <p className="text-sm text-blue-600 mt-2">
            Unused space within allocated partitions
          </p>
        </div>

        {/* Incomplete Process */}
        <div
          className="bg-purple-50 rounded-lg p-4 cursor-pointer hover:bg-purple-100 transition-colors shadow-sm "
          onClick={() => setShowEFPopup(true)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-purple-800">
              Incomplete Processes
            </h3>
            <span className="text-xl font-bold text-purple-600">{EF} KB</span>
          </div>
          <p className="text-sm text-purple-600 mt-2">
            Click to view {EFProcess.length} unallocated processes
          </p>
        </div>
      </div>

      {/* External Fragmentation Popup */}
      {showEFPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-0 max-w-lg w-full mx-4 max-h-[68%] overflow-y-auto">
            <div className="flex justify-between p-8 pb-4 items-center mb-4 sticky top-0 bg-white bg-transparent backdrop-blur">
              <h3 className="text-xl font-semibold text-gray-800">
                Unallocated Processes
              </h3>
              <button
                onClick={() => setShowEFPopup(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {EFProcess.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No unallocated processes
              </p>
            ) : (
              <div className="space-y-2 px-6">
                {EFProcess.map((process, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-md"
                    style={{ backgroundColor: `${getProcessColor(process)}22` }}
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getProcessColor(process) }}
                      ></div>
                      <span className="font-medium">
                        {processCart[process].name}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      {processCart[process].size} KB
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="h-12 sticky bg-gradient-to-t bottom-0 from-white to-transparent"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default FragmentationDisplay;
