// // // import React from "react";

// // // const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
// // //   return (
// // //     <div className="border border-gray-300 p-4 rounded-lg shadow-md">
// // //       <h3 className="text-xl font-semibold text-[#222]">{hometype}</h3>
// // //       <p className="text-gray-700">Location: {location}</p>
// // //       <p className="text-gray-700">Bedrooms: {bedrooms}</p>
// // //       <p className="text-gray-700">Beds: {beds}</p>
// // //       <p className="text-gray-700">Bathrooms: {bathrooms}</p>
// // //       <p className="text-black font-bold">Price: {typeof price === "number" ? `₹${price}/month` : price}</p>
// // //     </div>
// // //   );
// // // };

// // // export default Card;


// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price }) => {
// //   const navigate = useNavigate();

// //   const handleClick = () => {
// //     // Navigate to the details page for the clicked house
// //     navigate(`/tenent/displayHouse/${id}`);
// //   };

// //   return (
// //     <div
// //       className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer"
// //       onClick={handleClick}
// //     >
// //       <h3 className="text-xl font-semibold text-[#222]">{hometype}</h3>
// //       <p className="text-gray-700">Location: {location}</p>
// //       <p className="text-gray-700">Bedrooms: {bedrooms}</p>
// //       <p className="text-gray-700">Beds: {beds}</p>
// //       <p className="text-gray-700">Bathrooms: {bathrooms}</p>
// //       <p className="text-black font-bold">Price: ₹{price}/month</p>
// //     </div>
// //   );
// // };

// // export default Card;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import image1 from "..//../assets/landlord_image.jpg"

// const Card = ({ id, hometype, location, bedrooms, beds, bathrooms, price, coverImage }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/tenant/displayHouse/${id}`);
//   };

//   return (
//     <div
//       className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer"
//       onClick={handleClick}
//     >
//       {/* Display only the cover image */}
//       <img
//   src={coverImage || "default-placeholder.jpg"}
//   alt="Cover"
//   className="w-full h-40 object-cover mb-4 rounded"
// />

//       <h3 className="text-xl font-semibold text-[#222]">{hometype}</h3>
//       <p className="text-gray-700">Location: {location}</p>
//       <p className="text-gray-700">Bedrooms: {bedrooms}</p>
//       <p className="text-gray-700">Beds: {beds}</p>
//       <p className="text-gray-700">Bathrooms: {bathrooms}</p>
//       <p className="text-black font-bold">Price: ₹{price}/month</p>
//     </div>
//   );
// };

// export default Card;


// import React from "react";

// const Card = ({
//   id,
//   hometype,
//   location,
//   bedrooms,
//   beds,
//   bathrooms,
//   price,
//   coverImage,
// }) => {
//   return (
//     <div className="bg-white rounded shadow-lg p-4">
//       <img
//         src={`http://localhost:3000${coverImage}`} // Append server URL
//         alt={hometype}
//         className="w-full h-40 object-cover mb-4 rounded"
//       />
//       <h3 className="text-lg font-bold">{hometype}</h3>
//       <p className="text-gray-600">{location}</p>
//       <p>Bedrooms: {bedrooms}</p>
//       <p>Beds: {beds}</p>
//       <p>Bathrooms: {bathrooms}</p>
//       <p className="font-bold text-[#222]">₹{price}</p>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  hometype,
  location,
  bedrooms,
  beds,
  bathrooms,
  price,
  coverImage,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tenant/displayHouse/${id}`); // Navigate to the details page
  };

  return (
    <div
      className="bg-white rounded shadow-lg p-4 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Display cover image */}
      <img
        src={`/api/${coverImage}`}
        alt={hometype}
        className="w-full h-40 object-cover mb-4 rounded"
      />

      {/* Display home type and location */}
      <h3 className="text-lg font-bold">{hometype}</h3>
      <p className="text-gray-600">{location}</p>

      {/* Property details */}
      <div className="text-sm text-gray-700">
        <p>Bedrooms: {bedrooms}</p>
        <p>Beds: {beds}</p>
        <p>Bathrooms: {bathrooms}</p>
      </div>

      {/* Price */}
      <p className="font-bold text-[#222]">₹{price}</p>
    </div>
  );
};

export default Card;

