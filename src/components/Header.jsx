import React from "react";
import { MemoryStick } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-2 rounded-full mr-3">
              <MemoryStick className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">MemVisual</h1>
              <p className="text-blue-100 text-sm">
                OS Memory Allocation Visualizer
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center   bg-white bg-opacity-20 rounded-full px-4 py-2">
              <MemoryStick className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">
                Memory Allocation Simulator
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
