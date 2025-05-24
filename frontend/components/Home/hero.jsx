



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./card.jsx";

// const Hero = () => {
//   const [homes, setHomes] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend
//     axios
//       .get("http://localhost:3000/getHouses", { withCredentials: true })
//       .then((response) => {
//         setHomes(response.data); // Set the array of houses from response data
//       })
//       .catch((error) => {
//         console.error("Error fetching homes:", error);
//       });
//   }, []);

//   return (
//     <section className="py-12 px-6 bg-[#ededed]">
//       <h2 className="text-4xl font-bold text-[#222] text-center mb-10">
//         Explore Available Homes
//       </h2>
//       {homes.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No homes available at the moment. Please check back later.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {homes.map((home) => (
//             <Card
//               key={home._id} // Use _id as the key
//               id={home._id} // Pass _id as the id prop
//               hometype={home.hometype}
//               location={home.location}
//               bedrooms={home.bedrooms}
//               beds={home.beds}
//               bathrooms={home.bathrooms}
//               price={home.price || "Price not available"} // Fallback for missing price
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./card.jsx";

// const Hero = () => {
//   const [homes, setHomes] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend
//     axios
//       .get("http://localhost:3000/getHouses", { withCredentials: true })
//       .then((response) => {
//         setHomes(response.data);
//         console.log(response.data)
//         console.log(homes) 
//       })
//       .catch((error) => {
//         console.error("Error fetching homes:", error);
//       });
//   }, []);

//   return (
//     <section className="py-12 px-6 bg-[#ededed]">
//       <h2 className="text-4xl font-bold text-[#222] text-center mb-10">
//         Explore Available Homes
//       </h2>
//       {homes.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No homes available at the moment. Please check back later.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {homes.map((home) => (
//             <Card
//               key={home._id} // Use _id as the key
//               id={home._id} // Pass _id as the id prop
//               hometype={home.hometype}
//               location={home.location}
//               bedrooms={home.bedrooms}
//               beds={home.beds}
//               bathrooms={home.bathrooms}
//               price={home.price || "Price not available"} // Fallback for missing price
//               coverImage={home.coverImage} // Pass only coverImage to Card
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./card.jsx";

// const Hero = () => {
//   const [homes, setHomes] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend
//     axios
//       .get("http://localhost:3000/getHouses", { withCredentials: true })
//       .then((response) => {
//         // Check if the response contains the 'houses' array
//         console.log(response.data); // To see the full response

//         if (Array.isArray(response.data.houses)) {
//           setHomes(response.data.houses); // Set homes to the fetched houses
//         } else {
//           console.error("Expected an array of houses, but got:", response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching homes:", error);
//       });
//   }, []);

//   return (
//     <section className="py-12 px-6 bg-[#ededed]">
//       <h2 className="text-4xl font-bold text-[#222] text-center mb-10">
//         Explore Available Homes
//       </h2>
//       {homes.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No homes available at the moment. Please check back later.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {homes.map((home) => (
//             <Card
//               key={home._id} // Use _id as the key
//               id={home._id} // Pass _id as the id prop
//               hometype={home.hometype}
//               location={home.location}
//               bedrooms={home.bedrooms}
//               beds={home.beds}
//               bathrooms={home.bathrooms}
//               price={home.price || "Price not available"} // Fallback for missing price
//               coverImage={home.coverImage} // Pass only coverImage to Card
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./card.jsx";

// const Hero = () => {
//   const [homes, setHomes] = useState([]);
//   const [filters, setFilters] = useState({
//     searchTerm: "",
//     location: "",
//     hometype: "",
//     bathrooms: "",
//     bedrooms: "",
//     price: "",
//   });

//   // Fetch homes (without filters) on initial load
//   useEffect(() => {
//     const fetchHomes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/getHouses", {
//           withCredentials: true,
//         });

//         if (Array.isArray(response.data.houses)) {
//           setHomes(response.data.houses);
//         } else {
//           console.error("Expected an array of houses, but got:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching homes:", error);
//       }
//     };

//     fetchHomes();
//   }, []); // Runs only once on initial mount

//   // Function to handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   // Function to handle search bar change
//   const handleSearchChange = (e) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       location: e.target.value,
//     }));
//   };

//   // Function to fetch filtered homes
//   // Function to fetch filtered homes
// const fetchFilteredHomes = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/filterHouse",
//       filters,
//       { withCredentials: true }
//     );

//     if (response.data.success) {
//       setHomes(response.data.data); // Set the filtered houses
//     } else {
//       console.log("No homes found for the given filters.");
//     }
//   } catch (error) {
//     console.error("Error fetching filtered homes:", error);
//   }
// };

//   return (
//     <section className="py-12 px-6 bg-[#ededed]">
//       {/* Search Bar for Location */}
//       <div className="mb-6 flex justify-center">
//         <input
//           type="text"
//           name="location"
//           value={filters.location}
//           onChange={handleSearchChange}
//           className="px-4 py-2 rounded border border-gray-300 w-80"
//           placeholder="Search by Location"
//         />
//       </div>

//       {/* Filter Options Below Search Bar */}
//       <div className="flex justify-center space-x-4 mb-10">
//         <input
//           type="text"
//           name="location"
//           value={filters.location}
//           onChange={handleFilterChange}
//           className="px-4 py-2 rounded border border-gray-300 w-40"
//           placeholder="Location"
//         />
//         <select
//           name="hometype"
//           value={filters.hometype}
//           onChange={handleFilterChange}
//           className="px-4 py-2 rounded border border-gray-300 w-40"
//         >
//           <option value="">All Types</option>
//           <option value="House">House</option>
//           <option value="Apartment">Apartment</option>
//           <option value="Villa">Villa</option>
//           <option value="Studio">Studio</option>
//         </select>
//         <input
//           type="number"
//           name="bedrooms"
//           value={filters.bedrooms}
//           onChange={handleFilterChange}
//           className="px-4 py-2 rounded border border-gray-300 w-40"
//           placeholder="Bedrooms"
//         />
//         <input
//           type="number"
//           name="bathrooms"
//           value={filters.bathrooms}
//           onChange={handleFilterChange}
//           className="px-4 py-2 rounded border border-gray-300 w-40"
//           placeholder="Bathrooms"
//         />
//         <input
//           type="number"
//           name="price"
//           value={filters.price}
//           onChange={handleFilterChange}
//           className="px-4 py-2 rounded border border-gray-300 w-40"
//           placeholder="Max Price"
//         />
//       </div>

//       {/* Filter Button */}
//       <div className="text-center mb-10">
//         <button
//           onClick={fetchFilteredHomes}
//           className="bg-[#37A772] text-white px-6 py-2 rounded hover:bg-[#2d875a] transition"
//         >
//           Apply Filters
//         </button>
//       </div>

//       {/* Homes Grid */}
//       {homes.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No homes available at the moment. Please check back later.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {homes.map((home) => (
//             <Card
//               key={home._id}
//               id={home._id}
//               hometype={home.hometype}
//               location={home.location}
//               bedrooms={home.bedrooms}
//               beds={home.beds}
//               bathrooms={home.bathrooms}
//               price={home.price || "Price not available"}
//               coverImage={home.coverImage}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./card.jsx";
import { context } from "..//../main.jsx"; // Import AuthContext

const Hero = () => {
  const [homes, setHomes] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    location: "",
    hometype: "",
    bathrooms: "",
    bedrooms: "",
    price: "",
  });

  const { isAuthorised } = useContext(context); // Use AuthContext to check if the user is signed in

  // Fetch homes (without filters) on initial load
  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getHouses", {
          withCredentials: true,
        });

        if (Array.isArray(response.data.houses)) {
          setHomes(response.data.houses);
        } else {
          console.error("Expected an array of houses, but got:", response.data);
        }
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    if (isAuthorised) {
      fetchHomes();
    }
  }, [isAuthorised]); // Re-run when isAuthorised changes

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: e.target.value,
    }));
  };

  const fetchFilteredHomes = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/filterHouse",
        filters,
        { withCredentials: true }
      );

      if (response.data.success) {
        setHomes(response.data.data);
      } else {
        console.log("No homes found for the given filters.");
      }
    } catch (error) {
      console.error("Error fetching filtered homes:", error);
    }
  };

  return (
    <section className="py-12 px-6 bg-[#ededed]">
      {isAuthorised ? (
        <>
          {/* Search Bar and Filters */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded border border-gray-300 w-80"
              placeholder="Search by Location"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-10">
            {/* Add Filter Inputs */}
            
        <select
          name="hometype"
          value={filters.hometype}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded border border-gray-300 w-40"
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>

        </select>
        <input
          type="number"
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded border border-gray-300 w-40"
          placeholder="Bedrooms"
        />
      
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded border border-gray-300 w-40"
          placeholder="Max Price"
        />
      

          </div>
          <div className="text-center mb-10">
            <button
              onClick={fetchFilteredHomes}
              className="bg-[#37A772] text-white px-6 py-2 rounded hover:bg-[#2d875a] transition"
            >
              Apply Filters
            </button>
          </div>

          {/* Homes Grid */}
          {homes.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              No homes available at the moment. Please check back later.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {homes.map((home) => (
                <Card
                  key={home._id}
                  id={home._id}
                  hometype={home.hometype}
                  location={home.location}
                  bedrooms={home.bedrooms}
                  beds={home.beds}
                  bathrooms={home.bathrooms}
                  price={home.price || "Price not available"}
                  coverImage={home.coverImage}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        // Informational Section for Non-Authenticated Users
        <div className="text-center">
  <video
    src="https://media.istockphoto.com/id/1776196487/video/isometric-view-of-interior-of-modern-study-room-in-cartoon-style-3d-isometric-loop.mp4?s=mp4-640x640-is&k=20&c=hIvaAlyFprGDGCwTjwcijjuQLAhp-TVP-AdGUj0o7Hk="
    className="mx-auto mb-6 rounded"
    autoPlay
    loop
    muted
    style={{ maxWidth: "100%", borderRadius: "10px" }}
  />
  <h2 className="text-4xl font-bold mb-4">Welcome to RentLink</h2>
  <p className="text-gray-700 mb-6">
    RentLink connects tenants and landlords, offering a seamless way to
    find your dream home or list your property.
  </p>
  <p className="text-gray-700">
    Sign up to explore homes, apply filters, and book properties
    effortlessly!
  </p>
</div>

      )}
    </section>
  );
};

export default Hero;
