import { BookOpen } from "lucide-react";

function PartitionMethod({ partitionType, setPartitionType }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Memory Allocation Method
        </h2>
        <div className="relative group">
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <BookOpen size={20} />
          </button>
          <div className="absolute right-0 w-64 bg-gray-800 text-white text-sm rounded p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
            Choose between static partitioning or dynamic partitioning.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all duration-300 ${
            partitionType === "static"
              ? "border-blue-500 bg-blue-50 shadow-md"
              : "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
          }`}
          onClick={() => setPartitionType("static")}
        >
          <div className="w-full h-16 flex items-center justify-center mb-4">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-12 bg-blue-500 rounded transition-transform hover:scale-105"
                  style={{ opacity: 0.5 + i * 0.1 }}
                ></div>
              ))}
            </div>
          </div>
          <span className="font-medium text-gray-800 text-lg">
            Static Partition
          </span>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Memory divided into fixed-sized blocks
          </p>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all duration-300 ${
            partitionType === "dynamic"
              ? "border-purple-500 bg-purple-50 shadow-md"
              : "border-gray-200 hover:border-purple-200 hover:bg-purple-50"
          }`}
          onClick={() => setPartitionType("dynamic")}
        >
          <div className="w-full h-16 flex items-center justify-center mb-4">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-12 bg-purple-700 rounded transition-transform hover:scale-105"
                  style={{ opacity: 0.5 + i * 0.1 }}
                ></div>
              ))}
            </div>
          </div>
          <span className="font-medium text-gray-800 text-lg">
            Dynamic Partition
          </span>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Memory divided as needed by processes
          </p>
        </button>
      </div>
    </div>
  );
}

export default PartitionMethod;
