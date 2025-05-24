import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//landlord updates
const LandlordHouseDetails = () => {
  const { houseId } = useParams(); // Get houseId from URL
  const navigate = useNavigate(); // For redirecting after delete
  const [house, setHouse] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/houseDetails/${houseId}`,
          { withCredentials: true }
        );
        setHouse(response.data.house);
        setBookings(response.data.bookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching house details:", error);
        setLoading(false);
      }
    };

    fetchHouseDetails();
  }, [houseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateHouse = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/updateHouse/${houseId}`,
        formData,
        { withCredentials: true }
      );
      alert("House details updated successfully!");
      setHouse(response.data.updatedHouse); // Update local state
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating house:", error);
      alert("Failed to update house. Please try again.");
    }
  };

  const handleDeleteHouse = async () => {
    try {
      const response= await axios.delete(
        `http://localhost:3000/deleteHouse/${houseId}`,
        { withCredentials: true }
      );
      alert("House deleted successfully!");
      navigate("/landlord/getHouse"); // Redirect to the list of houses
    } catch (error) {
      console.error("Error deleting house:", error);
      alert("Failed to delete house. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!house) {
    return <p>House details not found.</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-[#ededed]">
      <h1 className="text-2xl font-bold mb-4">{house.title || "House Details"}</h1>
      <div className="border rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-xl font-semibold">{house.hometype}</h2>
        <p>Location: {house.location}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Beds: {house.beds}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        <p>Amenities: {house.amenities?.join(", ")}</p>
        <p>Price: ₹{house.price}</p>
        <p>Description: {house.description || "No description provided."}</p>
        {house.expired && <p className="text-red-500">Listing expired</p>}

        <div className="mt-4">
          {!editMode ? (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                onClick={() => {
                  setEditMode(true);
                  setFormData({
                    title: house.title || "",
                    price: house.price || "",
                    description: house.description || "",
                  });
                }}
              >
                Update House
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleDeleteHouse}
              >
                Delete House
              </button>
            </>
          ) : (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Edit House Details</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateHouse();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandlordHouseDetails;
