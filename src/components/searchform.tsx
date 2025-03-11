import React, { useState, useRef } from 'react';

interface Destination {
  label: string;
}

const SearchComponent: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [destinationDropdownVisible, setDestinationDropdownVisible] = useState(false);
  const destinationDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDestinationChange = (destination: Destination) => {
    setSelectedDestination(destination);
    setDestinationDropdownVisible(false);
  };

  return (
    <div className="relative z-2 text-left flex flex-col mt-[29%]">
      {/* Destination Dropdown */}
      <div className="relative">
        <div
          className="cursor-pointer bg-gray-100 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 transition-colors"
          onClick={() => setDestinationDropdownVisible(!destinationDropdownVisible)}
        >
          {selectedDestination ? selectedDestination.label : 'Where to go?'}
        </div>

        {destinationDropdownVisible && (
          <div
            ref={destinationDropdownRef}
            className="absolute bg-white mt-2 rounded-md shadow-lg w-full max-w-[200px] z-10"
          >
            {['Shimala', 'Huda', 'Gurugram'].map((destination) => (
              <div
                key={destination}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => handleDestinationChange({ label: destination })}
              >
                {destination}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
