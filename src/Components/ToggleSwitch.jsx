import React, { useState } from 'react';

function ToggleSwitch() {
  const [activeOption, setActiveOption] = useState('Monthly');

  return (
    <div className="flex justify-center mt-2">
      <div className="bg-[#E1EFFE] p-2 rounded-md flex justify-between w-[200px]">
        <div
          onClick={() => setActiveOption('Monthly')}
          className={`flex-1 text-center cursor-pointer px-4 py-2 rounded-md transition ${
            activeOption === 'Monthly' ? 'bg-white text-black' : 'text-[#1E3A8A]'
          }`}
        >
          Monthly
        </div>
        <div
          onClick={() => setActiveOption('Annual')}
          className={`flex-1 text-center cursor-pointer px-4 py-2 rounded-md transition ${
            activeOption === 'Annual' ? 'bg-white text-black' : 'text-[#1E3A8A]'
          }`}
        >
          Annual
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
