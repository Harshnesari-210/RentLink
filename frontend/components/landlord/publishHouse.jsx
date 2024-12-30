import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../main.jsx";
import axios from "axios";

const PublishHouse = () => {
  const { hostDetails } = useContext(context);
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const {
        houseType,
        location,
        bedrooms,
        beds,
        bathrooms,
        amenities,
        description,
        title,
        price,
       
        
      } = hostDetails;

      // Check if all fields are filled
      if (
        !houseType ||
        !location ||
        bedrooms === 0 ||
        beds === 0 ||
        !price 
      ) {
        alert("Please ensure all details are filled before publishing");
        return;
      }

      // API request to publish the house
      const response = await axios.post(
        "http://localhost:3000/addHouse",
        {
          hometype: houseType,
          location,
          bedrooms,
          beds,
          bathrooms,
          amenities,
          expired: false,
          description,
          title,
          price,
         
         
        },
        { withCredentials: true } // Include cookies for authentication
      );

      alert(response.data.message); // Display success message
      navigate("/"); // Redirect to hosted houses page
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to publish the house");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Review and Publish Your House</h1>
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">House Details</h2>
        <p><strong>Type:</strong> {hostDetails.houseType}</p>
        <p><strong>Location:</strong> {hostDetails.location}</p>
        <p><strong>Bedrooms:</strong> {hostDetails.bedrooms}</p>
        <p><strong>Beds:</strong> {hostDetails.beds}</p>
        <p><strong>Bathrooms:</strong> {hostDetails.bathrooms.join(", ")}</p>
        <p><strong>Amenities:</strong> {hostDetails.amenities.join(", ")}</p>
        <p><strong>Price:</strong> ${hostDetails.price}</p>
        <p><strong>Title:</strong> {hostDetails.title}</p>
        <p><strong>Description:</strong> {hostDetails.discription}</p>
      </div>
      <button
        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handlePublish}
      >
        Publish House
      </button>
    </div>
  );
};

export default PublishHouse;