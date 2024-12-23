import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from "..//../main.jsx"; // Import the shared context

const Host = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [selectedHouseType, setSelectedHouseType] = useState(hostDetails.houseType || '');
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setSelectedHouseType(type);
  };

  const handleNext = () => {
    if (!selectedHouseType) {
      alert('Please select a house type');
      return;
    }

    // Update the house type in the context
    setHostDetails((prev) => ({ ...prev, houseType: selectedHouseType }));

    // Navigate to the next step
    navigate('/landlord/HouseLocation');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Select Type of House</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          className={`cursor-pointer p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
            selectedHouseType === 'House' ? 'border-4 border-green-500 scale-105' : 'hover:scale-105'
          }`}
          onClick={() => handleSelect('House')}
        >
          <img src="house-image.jpg" alt="House" className="w-full h-40 object-cover rounded-lg mb-4" />
          <p className="text-center text-lg">House</p>
        </div>
        {/* Add other house types */}
      </div>
      <button
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Host;
