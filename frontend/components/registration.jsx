// // import React, { useState } from "react";
// // import rentlink from "../assets/rentlink.jpg"; // RentLink logo
// // import { useNavigate } from 'react-router-dom';

// // const Registration = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "",
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState(null);
  
// //   const navigate = useNavigate();
// //   const validateEmail = (email) => {
// //     // Simple email validation regex
// //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   };

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //     setError(null); // Clear error messages on change
// //     setSuccessMessage(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setSuccessMessage(null);

// //     try {
// //       const response = await fetch("http://localhost:3000/registration", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || "Failed to register user");
// //       }

// //       setSuccessMessage("User registered successfully!");
// //       navigate('/login');
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <div className="h-[100vh] w-full flex items-center justify-center bg-white">
// //       <div className="container w-[30%] p-8 border border-solid border-black rounded-lg shadow-lg bg-white">
// //         <div className="logo-container flex justify-center mb-4">
// //           <img
// //             src={rentlink}
// //             alt="RentLink Logo"
// //             className="h-20 w-20 object-cover"
// //           />
// //         </div>

// //         <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#222" }}>
// //           Register
// //         </h2>

// //         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
// //         {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {/* Name Input */}
// //           <div className="relative">
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Enter Your Name"
// //               className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#222]"
// //               required
// //             />
// //           </div>

// //           {/* Email Input */}
// //           <div className="relative">
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Enter Your Email"
// //               className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#222]"
// //               required
// //             />
// //           </div>

// //           {/* Password Input */}
// //           <div className="relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               placeholder="Enter Your Password"
// //               className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#222]"
// //               required
// //             />
// //             <button
// //               type="button"
// //               className="absolute right-3 top-3 text-sm text-gray-600"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? "Hide" : "Show"}
// //             </button>
// //           </div>

// //           {/* Role Selection */}
// //           <div className="role-field flex items-center justify-evenly">
// //             <div
// //               className={`role-option flex flex-col items-center cursor-pointer ${
// //                 formData.role === "Tenant" ? "border-[#222] border-2" : ""
// //               } p-2 rounded-lg`}
// //               onClick={() => setFormData({ ...formData, role: "Tenant" })}
// //             >
// //               <img
// //                 src="https://example.com/tenant-icon.png"
// //                 alt="Tenant"
// //                 className="h-20 w-20"
// //               />
// //               <span className="mt-2 text-black">Tenant</span>
// //             </div>
// //             <div
// //               className={`role-option flex flex-col items-center cursor-pointer ${
// //                 formData.role === "Landlord" ? "border-[#222] border-2" : ""
// //               } p-2 rounded-lg`}
// //               onClick={() => setFormData({ ...formData, role: "Landlord" })}
// //             >
// //               <img
// //                 src="https://example.com/landlord-icon.png"
// //                 alt="Landlord"
// //                 className="h-20 w-20"
// //               />
// //               <span className="mt-2 text-black">Landlord</span>
// //             </div>
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full p-3 bg-[#222] text-white font-bold rounded-md hover:bg-[#37A772]"
// //           >
// //             Register
// //           </button>
// //         </form>

// //         <div className="text-center mt-6">
// //           <span className="text-sm text-gray-600">
// //             Already have an account?{" "}
// //             <a href="/login" className="text-[#222] font-semibold">
// //               Login here
// //             </a>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Registration;


// import React, { useState } from "react";
// import rentlink from "../assets/rentlink.jpg"; // RentLink logo
// import { useNavigate } from 'react-router-dom';
// import tenant_image from "../assets/tenant_image.jpg"
// import landlord_image from "../assets/landlord_image.jpg"

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
  
//   const navigate = useNavigate();
//   const validateEmail = (email) => {
//     // Simple email validation regex
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setError(null); // Clear error messages on change
//     setSuccessMessage(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMessage(null);

//     try {
//       const response = await fetch("http://localhost:3000/registration", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to register user");
//       }

//       setSuccessMessage("User registered successfully!");
//       navigate('/login');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="h-[100vh] w-full flex items-center justify-center bg-[#ededed]">
//       <div className="container w-[30%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
//         <div className="logo-container flex justify-center mb-4">
//           <img
//             src={rentlink}
//             alt="RentLink Logo"
//             className="h-20 w-20 object-cover"
//           />
//         </div>

//         <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#222" }}>
//           Register
//         </h2>

//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//         {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Input */}
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter Your Name"
//               className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Your Email"
//               className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Your Password"
//               className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
//               required
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-3 text-sm text-[#222]"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>

//           {/* Role Selection */}
//           <div className="role-field flex items-center justify-evenly">
//             <div
//               className={`role-option flex flex-col items-center cursor-pointer ${formData.role === "Tenant" ? "border-[#222] border-2" : ""} p-2 rounded-lg`}
//               onClick={() => setFormData({ ...formData, role: "Tenant" })}
//             >
//               <img
//                 src={tenant_image}
//                 alt="Tenant"
//                 className="h-20 w-20"
//               />
//               <span className="mt-2 text-[#222]">Tenant</span>
//             </div>
//             <div
//               className={`role-option flex flex-col items-center cursor-pointer ${formData.role === "Landlord" ? "border-[#222] border-2" : ""} p-2 rounded-lg`}
//               onClick={() => setFormData({ ...formData, role: "Landlord" })}
//             >
//               <img
//                 src={landlord_image}
//                 alt="Landlord"
//                 className="h-20 w-20"
//               />
//               <span className="mt-2 text-[#222]">Landlord</span>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full p-3 bg-[#222] text-white font-bold rounded-md hover:bg-[#111]"
//           >
//             Register
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <span className="text-sm text-[#222]">
//             Already have an account?{" "}
//             <a href="/login" className="text-[#222] font-semibold">
//               Login here
//             </a>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;


import React, { useState } from "react";
import rentlink from "../assets/rentlink.jpg"; // RentLink logo
import { useNavigate } from "react-router-dom";
import tenant_image from "../assets/tenant_image.jpg";
import landlord_image from "../assets/landlord_image.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null); // Clear error messages on change
    setSuccessMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to register user");
      }

      setSuccessMessage("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-[100vh] flex bg-white">
      {/* Left Section - Video */}
      <div className="w-1/2 relative">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="container w-[80%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
          <div className="logo-container flex justify-center mb-4">
            <img
              src={rentlink}
              alt="RentLink Logo"
              className="h-20 w-20 object-cover"
            />
          </div>

          <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#222" }}>
            Register
          </h2>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full p-3 border border-[#222] rounded-md focus:outline-none focus:border-[#222]"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-sm text-[#222]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Role Selection */}
            <div className="role-field flex items-center justify-evenly">
              <div
                className={`role-option flex flex-col items-center cursor-pointer ${
                  formData.role === "Tenant" ? "border-[#222] border-2" : ""
                } p-2 rounded-lg`}
                onClick={() => setFormData({ ...formData, role: "Tenant" })}
              >
                <img src={tenant_image} alt="Tenant" className="h-20 w-20" />
                <span className="mt-2 text-[#222]">Tenant</span>
              </div>
              <div
                className={`role-option flex flex-col items-center cursor-pointer ${
                  formData.role === "Landlord" ? "border-[#222] border-2" : ""
                } p-2 rounded-lg`}
                onClick={() => setFormData({ ...formData, role: "Landlord" })}
              >
                <img src={landlord_image} alt="Landlord" className="h-20 w-20" />
                <span className="mt-2 text-[#222]">Landlord</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-[#222] text-white font-bold rounded-md hover:bg-[#111]"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-sm text-[#222]">
              Already have an account?{" "}
              <a href="/login" className="text-[#222] font-semibold">
                Login here
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
