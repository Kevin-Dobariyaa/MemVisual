import React from 'react'
import Static from './Static';
import bestFit from '../../utilis/bestFit';
import Dynamic from './Dynamic';

function BestFit({ processCart, memory, partitionType }) {
  const newMemory = bestFit(partitionType, memory, processCart);
  return (
    <div className='relative'>
      <h2 className="text-2xl font-bold text-gray-600 mb-1 ml-2">
        Best Fit 
      </h2>
      <div className="overflow-x-auto w-full py-4">
        <div className="flex space-x-1 min-w-max px-2">
          { partitionType === 'static' && (<Static newMemory={newMemory} processCart={processCart} />)}
          { partitionType === 'dynamic' && (<Dynamic newMemory={newMemory} processCart={processCart} />)}
        </div>
      </div>
      <div className="absolute right-0 w-10 bottom-3.5 h-[50%] bg-gradient-to-r from-transparent to-zinc-50" />

    </div>
  );
}

export default BestFit