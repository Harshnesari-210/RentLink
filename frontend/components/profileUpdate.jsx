// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Profile = () => {
//   const [contactNumber, setContactNumber] = useState(""); // For contact number
//   const [address, setAddress] = useState(""); // For address
//   const [isUpdated, setIsUpdated] = useState(false); // To track if the profile was updated
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Load user details when the component mounts
//   useEffect(() => {
//     const fetchProfileDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/userProfile", { withCredentials: true });
//         const { contactNumber, address } = response.data;
//         setContactNumber(contactNumber || "");
//         setAddress(address || "");
//       } catch (error) {
//         console.error("Error fetching profile details:", error);
//       }
//     };

//     fetchProfileDetails();
//   }, []);

//   // Handle form submission
//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         "http://localhost:3000/profile/update", // Backend API endpoint
//         { contactNumber, address }, // Data to update
//         { withCredentials: true } // Include cookies for authentication
//       );

//       console.log(response);
//       alert("Profile updated successfully!");
//       setIsUpdated(true); // Set update status to true
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again.");
//     }
//   };

//   // Handle navigation to the profile page
//   const handleNavigateToProfile = () => {
//     navigate("/profile");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         {/* Contact Number */}
//         <div>
//           <label className="block mb-2 font-semibold">Contact Number</label>
//           <input
//             type="text"
//             value={contactNumber}
//             onChange={(e) => setContactNumber(e.target.value)}
//             className="border rounded p-2 w-full"
//             placeholder="Enter your contact number"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block mb-2 font-semibold">Address</label>
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="border rounded p-2 w-full"
//             placeholder="Enter your address"
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-[#222] text-white px-4 py-2 rounded shadow"
//         >
//           Update Profile
//         </button>
//       </form>

//       {/* Navigate to Profile Button */}
//       {isUpdated && (
//         <button
//           onClick={handleNavigateToProfile}
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow mt-4"
//         >
//           Go to Profile
//         </button>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const [contactNumber, setContactNumber] = useState(""); // For contact number
  const [address, setAddress] = useState(""); // For address
  const [isUpdated, setIsUpdated] = useState(false); // To track if the profile was updated
  const navigate = useNavigate(); // Initialize useNavigate

  // Load user details when the component mounts
  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get("/api/userProfile", { withCredentials: true });
        const { contactNumber, address } = response.data;
        setContactNumber(contactNumber || "");
        setAddress(address || "");
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };

    fetchProfileDetails();
  }, []);

  // Handle form submission
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "/api/profile/update", // Backend API endpoint
        { contactNumber, address }, // Data to update
        { withCredentials: true } // Include cookies for authentication
      );

      alert("Profile updated successfully!");
      setIsUpdated(true); // Set update status to true
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Handle navigation to the profile page
  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="container mx-auto p-6 bg-[#f7f7f7]">
      <h1 className="text-2xl font-bold mb-6 text-[#222]">Edit Profile</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        {/* Contact Number */}
        <div>
          <label className="block text-lg font-semibold text-[#333] mb-2">Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#222] focus:border-[#222]"
            placeholder="Enter your contact number"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-lg font-semibold text-[#333] mb-2">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#222] focus:border-[#222]"
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#222] text-white px-6 py-3 rounded shadow w-full hover:bg-[#0d6c39]"
        >
          Update Profile
        </button>
      </form>

      {/* Navigate to Profile Button */}
      {isUpdated && (
        <button
          onClick={handleNavigateToProfile}
          className="bg-blue-500 text-white px-6 py-3 rounded shadow w-full mt-4 hover:bg-blue-600"
        >
          Go to Profile
        </button>
      )}
    </div>
  );
};

export default ProfileUpdate;
