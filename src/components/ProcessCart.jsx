import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { getProcessColor } from '../utilis/color';

function processCart({processCart}) {
  if (processCart.length === 0) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Process Cart</h2>
          <div className="bg-gray-100 px-2 py-1 rounded-md text-gray-500 text-sm">
            0 processes
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
          <ShoppingCart size={48} className="mb-2" />
          <p>Your process cart is empty</p>
          <p className="text-sm">Add processes to allocate them to memory</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Process Cart</h2>
        <div className="bg-gray-100 px-2 py-1 rounded-md text-gray-500 text-sm">
          {processCart.length} {processCart.length === 1 ? 'process' : 'processes'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {processCart.map((item,id) => (
          <div
            key={id}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-md group hover:border-blue-200 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-3"
                style={{ backgroundColor: getProcessColor(id) }}
              ></div>
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.size} KB</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default processCart