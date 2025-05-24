import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const HostedHouse = () => {
  const [houses, setHouses] = useState([]); // State to store houses
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchLandlordHouses = async () => {
      try {
        const response = await axios.get('/api/landlordHouse', { withCredentials: true });
        setHouses(response.data.landlordHouses);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchLandlordHouses();
  }, []);

  const handleCardClick = (homeId) => {
    navigate(`/houseDetails/${homeId}`); // Navigate to the detailed page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Hosted Houses</h1>
      {houses.length === 0 ? (
        <p>No houses found. Start hosting one today!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {houses.map((house, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md cursor-pointer" // Add cursor-pointer for visual feedback
              onClick={() => handleCardClick(house._id)} // Navigate on click
            >
              <h2 className="text-xl font-semibold">{house.hometype}</h2>
              <p>Location: {house.location}</p>
              <p>Bedrooms: {house.bedrooms}</p>
              <p>Beds: {house.beds}</p>
              <p>Bathrooms: {house.bathrooms}</p>
              <p>Price: ₹{house.price}</p>
              <p>Amenities: {house.amenities?.join(', ')}</p>
              {house.expired && <p className="text-red-500">Listing expired</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostedHouse;
