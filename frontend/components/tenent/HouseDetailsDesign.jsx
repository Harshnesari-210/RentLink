

// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const HouseDetailsDesign = () => {
// //   const { id } = useParams(); // Get the house ID from the URL
// //   const [house, setHouse] = useState(null);
// //   const [error, setError] = useState(null); // For storing errors
// //   const navigate = useNavigate(); // Correct usage of useNavigate hook

// //   useEffect(() => {
// //     // Fetch house data from your backend using the ID
// //     const fetchHouseData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
// //         setHouse(response.data); // Set the fetched house data
// //       } catch (error) {
// //         setError("Error fetching house data. Please try again later."); // Handle error
// //         console.error('Error fetching house data:', error);
// //       }
// //     };

// //     fetchHouseData();
// //   }, [id]);

// //   if (error) {
// //     return <p className="text-center text-red-500">{error}</p>; // Display error message if there was an issue fetching the data
// //   }

// //   if (!house) {
// //     return <p className="text-center">Loading...</p>; // Display loading until data is available
// //   }

// //   const {
// //     hometype,
// //     location,
// //     bedrooms,
// //     beds,
// //     bathrooms,
// //     price,
// //     amenities,
// //     images,
// //   } = house;

// //   const handleBook = () => {
// //     navigate(`/bookHouse/${id}`); // Correct way to navigate to the booking page
// //   };

// //   return (
// //     <div className="container mx-auto p-8 bg-[#ededed] rounded-lg shadow-xl">
// //       {/* Heading - House Name */}
// //       <h1 className="text-4xl font-extrabold text-[#222] mb-6 text-center">{hometype} in {location}</h1>

// //       {/* Image Gallery */}
// //       <div className="mb-8">
// //         <h3 className="text-2xl font-semibold text-[#222] mb-4">Image Gallery</h3>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {images && images.slice(0, 5).map((image, index) => (
// //             <img
// //               key={index}
// //               src={image}
// //               alt={`House image ${index + 1}`}
// //               className="w-full h-[300px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Property Details */}
// //       <div className="mb-8">
// //         <h3 className="text-2xl font-semibold text-[#222] mb-4">Property Details</h3>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
// //           <p><strong>Location:</strong> {location}</p>
// //           <p><strong>Bedrooms:</strong> {bedrooms}</p>
// //           <p><strong>Beds:</strong> {beds}</p>
// //           <p><strong>Bathrooms:</strong> {bathrooms}</p>
// //         </div>
// //       </div>

// //       {/* Price Information */}
// //       <div className="mb-8">
// //         <h3 className="text-2xl font-semibold text-[#222] mb-4">Price</h3>
// //         <p className="text-2xl font-bold text-[#222]">₹{price}/month</p>
// //       </div>

// //       {/* Amenities Section */}
// //       <div className="mb-8">
// //         <h3 className="text-2xl font-semibold text-[#222] mb-4">Amenities</h3>
// //         <ul className="list-disc pl-5 text-lg text-gray-700">
// //           {amenities && amenities.map((amenity, index) => (
// //             <li key={index}>{amenity}</li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Book Now Button */}
// //       <div className="text-center">
// //         <button 
// //           onClick={handleBook} 
// //           className="bg-[#222] text-white px-8 py-3 rounded-full text-xl hover:bg-[#37A772] transition-all duration-300 transform hover:scale-105"
// //         >
// //           Book Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HouseDetailsDesign;


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HouseDetailsDesign = () => {
//   const { id } = useParams(); // Get the house ID from the URL
//   const [house, setHouse] = useState(null);
//   const [error, setError] = useState(null); // For storing errors
//   const navigate = useNavigate(); // Correct usage of useNavigate hook

//   useEffect(() => {
//     // Fetch house data from your backend using the ID
//     const fetchHouseData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
//         setHouse(response.data); // Set the fetched house data
//       } catch (error) {
//         setError("Error fetching house data. Please try again later."); // Handle error
//         console.error('Error fetching house data:', error);
//       }
//     };

//     fetchHouseData();
//   }, [id]);

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>; // Display error message if there was an issue fetching the data
//   }

//   if (!house) {
//     return <p className="text-center">Loading...</p>; // Display loading until data is available
//   }

//   const {
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     price,
//     amenities,
//     images,
//   } = house;

//   const handleBook = () => {
//     navigate(`/bookHouse/${id}`); // Correct way to navigate to the booking page
//   };

//   return (
//     <div className="container mx-auto p-8 bg-[#ededed] rounded-lg shadow-xl">
//       {/* Heading - House Name */}
//       <h1 className="text-4xl font-extrabold text-[#222] mb-6 text-center">{hometype} in {location}</h1>

//       {/* Image Gallery */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Image Gallery</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {images && images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`House image ${index + 1}`}
//               className="w-full h-[300px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Property Details */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Property Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
//           <p><strong>Location:</strong> {location}</p>
//           <p><strong>Bedrooms:</strong> {bedrooms}</p>
//           <p><strong>Beds:</strong> {beds}</p>
//           <p><strong>Bathrooms:</strong> {bathrooms}</p>
//         </div>
//       </div>

//       {/* Price Information */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Price</h3>
//         <p className="text-2xl font-bold text-[#222]">₹{price}/month</p>
//       </div>

//       {/* Amenities Section */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Amenities</h3>
//         <ul className="list-disc pl-5 text-lg text-gray-700">
//           {amenities && amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Book Now Button */}
//       <div className="text-center">
//         <button 
//           onClick={handleBook} 
//           className="bg-[#222] text-white px-8 py-3 rounded-full text-xl hover:bg-[#37A772] transition-all duration-300 transform hover:scale-105"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HouseDetailsDesign;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HouseDetailsDesign = () => {
//   const { id } = useParams(); // Get the house ID from the URL
//   const [house, setHouse] = useState(null);
//   const [error, setError] = useState(null); // For storing errors
//   const navigate = useNavigate(); // Correct usage of useNavigate hook

//   useEffect(() => {
//     // Fetch house data from your backend using the ID
//     const fetchHouseData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/tenent/displayHouse/${id}`, { withCredentials: true });
//         setHouse(response.data); // Set the fetched house data
//       } catch (error) {
//         setError("Error fetching house data. Please try again later."); // Handle error
//         console.error('Error fetching house data:', error);
//       }
//     };

//     fetchHouseData();
//   }, [id]);

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>; // Display error message if there was an issue fetching the data
//   }

//   if (!house) {
//     return <p className="text-center">Loading...</p>; // Display loading until data is available
//   }

//   const {
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     price,
//     amenities,
//     coverImage, // Now contains coverImage and otherImages
//     title,
//     description,
//   } = house;

//   const handleBook = () => {
//     navigate(`/bookHouse/${id}`); // Correct way to navigate to the booking page
//   };

//   return (
//     <div className="container mx-auto p-8 bg-[#ededed] rounded-lg shadow-xl">
//       {/* Heading - House Title */}
//       <h1 className="text-4xl font-extrabold text-[#222] mb-6 text-center">{title} in {location}</h1>

//       {/* Image Gallery */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Image Gallery</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {coverImage && (
//   <img
//   src={`http://localhost:3000${coverImage}`}
//   alt="Cover Image"
//   className="w-full h-[300px] object-contain rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
// />

// )}

          
//         </div>
//       </div>

//       {/* Property Details */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Property Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
//           <p><strong>Location:</strong> {location}</p>
//           <p><strong>Bedrooms:</strong> {bedrooms}</p>
//           <p><strong>Beds:</strong> {beds}</p>
//           <p><strong>Bathrooms:</strong> {bathrooms?.join(", ")}</p> {/* Display all bathrooms */}
//         </div>
//       </div>

//       {/* Price Information */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Price</h3>
//         <p className="text-2xl font-bold text-[#222]">₹{price}/month</p>
//       </div>

//       {/* Amenities Section */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Amenities</h3>
//         <ul className="list-disc pl-5 text-lg text-gray-700">
//           {amenities?.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Description */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-[#222] mb-4">Description</h3>
//         <p className="text-lg text-gray-700">{description}</p>
//       </div>

//       {/* Book Now Button */}
//       <div className="text-center">
//         <button 
//           onClick={handleBook} 
//           className="bg-[#222] text-white px-8 py-3 rounded-full text-xl hover:bg-[#37A772] transition-all duration-300 transform hover:scale-105"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HouseDetailsDesign;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel'; // Install via npm install react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HouseDetailsDesign = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        const response = await axios.get(
          `/api/tenent/displayHouse/${id}`,
          { withCredentials: true }
        );
        setHouse(response.data);
      } catch (error) {
        setError('Error fetching house data. Please try again later.');
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!house) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#37A772]"></div>
      </div>
    );
  }

  const {
    title,
    location,
    hometype,
    bedrooms,
    beds,
    bathrooms,
    price,
    amenities,
    description,
    coverImage,
    images,
  } = house;

  const handleBook = () => {
    navigate(`/bookHouse/${id}`);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-8 transform transition duration-300 hover:scale-105 max-w-4xl">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#222] mb-6 text-center capitalize animate-fadeInDown">
        {title} in {location}
      </h1>

      {/* Image Gallery */}
      <div className="mb-8 animate-fadeInUp">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">Image Gallery</h3>
        {images?.length ? (
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            className="rounded-lg shadow-lg"
          >
            {images.map((img, index) => (
              <div key={index} className="w-full h-[300px]">
                <img
                  src={`/api/${img}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="w-full h-[300px]">
            <img
              src={`/api/${coverImage}`}
              alt="Cover Image"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="mb-6 animate-fadeInUp">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">Property Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
          <p><strong>Home Type:</strong> {hometype}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Bedrooms:</strong> {bedrooms}</p>
          <p><strong>Beds:</strong> {beds}</p>
          <p><strong>Bathrooms:</strong> {bathrooms?.join(", ")}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 animate-fadeInUp">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">Price</h3>
        <p className="text-3xl font-bold text-[#37A772]">₹{price}/month</p>
      </div>

      {/* Amenities */}
      <div className="mb-6 animate-fadeInUp">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">Amenities</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          {amenities?.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="mb-8 animate-fadeInUp">
        <h3 className="text-2xl font-semibold text-[#222] mb-4">Description</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Book Now */}
      <div className="text-center animate-fadeInUp">
        <button
          onClick={handleBook}
          className="bg-[#222] text-white px-8 py-3 rounded-full text-lg sm:text-xl hover:bg-[#222] transition-transform duration-300 transform hover:scale-110 shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HouseDetailsDesign;
