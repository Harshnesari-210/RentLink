// import React, { useContext } from "react";
// import { context } from "../main.jsx";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { isAuthorised, user } = useContext(context);

//   return (
//     <nav className="bg-white p-4 shadow-md">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Home Link */}
//         <Link to="/" className="text-xl font-bold text-[#222]">
//           RentLink
//         </Link>

//         {/* Navbar Links */}
//         <div className="flex space-x-6">
//           {!isAuthorised ? (
//             // If not logged in, show Sign In and Sign Up links
//             <>
//               <Link to="/login" className="text-[#222]">Sign In</Link>
//               <Link to="/registration" className="text-[#222]">Sign Up</Link>
//             </>
//           ) : (
//             // If logged in, show Profile and Role-specific links
//             <>
//               <Link to="/profile" className="text-[#222]">
//                 Profile
//               </Link>
//               {user.role === "Tenant" ? (
//                 // Tenant role-specific link
//                 <Link to="/tenant/gethouses" className="text-[#222]">
//                   Search Houses
//                 </Link>
//               ) : user.role === "Landlord" ? (
//                 // Landlord role-specific link
//                 <>
//                 <Link to="/landlord/Host" className="text-[#222]">
//                   Host House
//                 </Link>
//                 <Link to="/landlord/getHouse" className="text-[#222]">
//                   Hosted Houses
//                 </Link>
//               </>
//               ) : null}
//               <Link to="/logout" className="text-[#222]">Logout</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext } from "react";
// import { context } from "../main.jsx";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Navbar = () => {
//   const { isAuthorised, user } = useContext(context);
//   const navigate = useNavigate();

//   // Handle logout
//   const handleLogout = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/logout",
//         {},
//         { withCredentials: true }
//       );

//       if (response.data.success) {
//         alert(response.data.message);
//         setIs
//         navigate("/login"); // Redirect to login page
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   return (
//     <nav className="bg-white p-4 shadow-md">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Home Link */}
//         <Link to="/" className="text-xl font-bold text-[#222]">
//           RentLink
//         </Link>

//         {/* Navbar Links */}
//         <div className="flex space-x-6">
//           {!isAuthorised ? (
//             // If not logged in, show Sign In and Sign Up links
//             <>
//               <Link to="/login" className="text-[#222]">
//                 Sign In
//               </Link>
//               <Link to="/registration" className="text-[#222]">
//                 Sign Up
//               </Link>
//             </>
//           ) : (
//             // If logged in, show Profile and Role-specific links
//             <>
//               <Link to="/profile" className="text-[#222]">
//                 Profile
//               </Link>
//               {user.role === "Tenant" ? (
//                 // Tenant role-specific link
//                 <Link to="/tenant/gethouses" className="text-[#222]">
//                   Search Houses
//                 </Link>
//               ) : user.role === "Landlord" ? (
//                 // Landlord role-specific link
//                 <>
//                   <Link to="/landlord/Host" className="text-[#222]">
//                     Host House
//                   </Link>
//                   <Link to="/landlord/getHouse" className="text-[#222]">
//                     Hosted Houses
//                   </Link>
//                 </>
//               ) : null}
//               <button
//                 onClick={handleLogout}
//                 className="text-[#222] focus:outline-none"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { context } from "../main.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { isAuthorised, user, setIsauthorised } = useContext(context); // Destructure setIsAuthorised
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/logout",
        {},
        { withCredentials: true }
      );

      if (response.data.success) {
        alert(response.data.message);
        setIsauthorised(false); // Update the context state to logged out
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <nav className="bg-[#ededed] p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link to="/" className="text-xl font-bold text-[#222]">
          RentLink
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          {!isAuthorised ? (
            // If not logged in, show Sign In and Sign Up linksr
            <>
              <Link to="/login" className="text-[#222]">
                Sign In
              </Link>
              <Link to="/registration" className="text-[#222]">
                Sign Up
              </Link>
            </>
          ) : (
            // If logged in, show Profile and Role-specific links
            <>
              <Link to="/profile" className="text-[#222]">
                Profile
              </Link>
              {user.role === "Tenant" ? (
                // Tenant role-specific link
                <Link to="/tenant/gethouses" className="text-[#222]">
                  Search Houses
                </Link>
              ) : user.role === "Landlord" ? (
                // Landlord role-specific link
                <>
                  <Link to="/landlord/Host" className="text-[#222]">
                    Host House
                  </Link>
                  <Link to="/landlord/getHouse" className="text-[#222]">
                    Hosted Houses
                  </Link>
                </>
              ) : null}
              <button
                onClick={handleLogout}
                className="text-[#222] focus:outline-none"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
