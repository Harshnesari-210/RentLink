// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for errors
//   const navigate = useNavigate(); // React Router navigation hook

//   // Fetch profile details
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
//         setUser(response.data); // Set user data
//       } catch (err) {
//         setError(err.response ? err.response.data.message : 'An error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Validation before navigating to edit page
//   const handleEditProfile = () => {
//     if (!user.contactNumber || !user.address) {
//       alert('Please ensure your contact number and address are filled in before proceeding.');
//     } else {
//       navigate('/profileUpdate'); // Navigate to edit profile page
//     }
//   };

//   // Render profile details or loading/error state
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="profile-container">
//       <h1 className="text-xl font-bold mb-4">Profile</h1>
//       {user && (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Role:</strong> {user.role}</p>
//           {user.contactNumber && <p><strong>Contact Number:</strong> {user.contactNumber}</p>}
//           {user.address && <p><strong>Address:</strong> {user.address}</p>}

//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//             onClick={handleEditProfile} // Call validation function
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation
// import Shimmer from './shimmer';

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for errors
//   const navigate = useNavigate(); // React Router navigation hook

//   // Fetch profile details
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
//         setUser(response.data); // Set user data
//       } catch (err) {
//         setError(err.response ? err.response.data.message : 'An error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Validation before navigating to edit page
//   const handleEditProfile = () => {
   
      
   
//       navigate('/profileUpdate'); // Navigate to edit profile page
  
//   };

//   // Render profile details or loading/error state
//   if (loading) return <Shimmer/>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="h-[100vh] w-full flex items-center justify-center bg-[#ededed]">
//       <div className="container w-[30%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
//         <h1 className="text-xl font-bold mb-4 text-[#222]">Profile</h1>
//         {user && (
//           <div>
//             <p className="text-[#222]"><strong>Name:</strong> {user.name}</p>
//             <p className="text-[#222]"><strong>Email:</strong> {user.email}</p>
//             <p className="text-[#222]"><strong>Role:</strong> {user.role}</p>
//             {user.contactNumber && <p className="text-[#222]"><strong>Contact Number:</strong> {user.contactNumber}</p>}
//             {user.address && <p className="text-[#222]"><strong>Address:</strong> {user.address}</p>}

//             <button
//               className="bg-[#222] text-white px-4 py-2 rounded mt-4 hover:bg-[#111]"
//               onClick={handleEditProfile} // Call validation function
//             >
//               Edit Profile
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation
// import Shimmer from './shimmer'; // Placeholder component for loading state

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for errors
//   const navigate = useNavigate(); // React Router navigation hook

//   // Fetch profile details
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
//         setUser(response.data); // Set user data
//       } catch (err) {
//         setError(err.response ? err.response.data.message : 'An error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Validation before navigating to edit page
//   const handleEditProfile = () => {
//     navigate('/profileUpdate'); // Navigate to edit profile page
//   };

//   // Render profile details or loading/error state
//   if (loading) return <Shimmer />;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="h-[100vh] w-full flex items-center justify-center bg-[#f7f7f7]">
//       <div className="container w-[40%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
//         <h1 className="text-2xl font-bold mb-4 text-[#222]">Your Profile</h1>
//         {user && (
//           <div>
//             <p className="text-lg text-[#333]"><strong>Name:</strong> {user.name}</p>
//             <p className="text-lg text-[#333]"><strong>Email:</strong> {user.email}</p>
//             <p className="text-lg text-[#333]"><strong>Role:</strong> {user.role}</p>
//             {user.contactNumber && <p className="text-lg text-[#333]"><strong>Contact Number:</strong> {user.contactNumber}</p>}
//             {user.address && <p className="text-lg text-[#333]"><strong>Address:</strong> {user.address}</p>}

//             <button
//               className="bg-[#222] text-white px-6 py-2 rounded mt-6 w-full hover:bg-[#0d6c39]"
//               onClick={handleEditProfile} // Call validation function
//             >
//               Edit Profile
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation
// import Shimmer from './shimmer'; // Placeholder component for loading state

// const Profile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [bookings, setBookings] = useState([]); // State for tenant bookings
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for errors
//   const navigate = useNavigate(); // React Router navigation hook

//   // Fetch profile details along with bookings
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/userProfile', { withCredentials: true });
//         console.log(response); // Log the full response for debugging
//         setUser(response.data.user); // Set user data
//         setBookings(response.data.bookings || []); // Set bookings data (empty array if no bookings)
//       } catch (err) {
//         setError(err.response ? err.response.data.message : 'An error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Validation before navigating to edit page
//   const handleEditProfile = () => {
//     navigate('/profileUpdate'); // Navigate to edit profile page
//   };

//   // Render profile details or loading/error state
//   if (loading) return <Shimmer />;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="h-[100vh] w-full flex items-center justify-center bg-[#f7f7f7]">
//       <div className="container w-[40%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
//         <h1 className="text-2xl font-bold mb-4 text-[#222]">Your Profile</h1>
        
//         {user && (
//           <div>
//             <p className="text-lg text-[#333]"><strong>Name:</strong> {user.name}</p>
//             <p className="text-lg text-[#333]"><strong>Email:</strong> {user.email}</p>
//             <p className="text-lg text-[#333]"><strong>Role:</strong> {user.role}</p>
//             {user.contactNumber && <p className="text-lg text-[#333]"><strong>Contact Number:</strong> {user.contactNumber}</p>}
//             {user.address && <p className="text-lg text-[#333]"><strong>Address:</strong> {user.address}</p>}

//             <button
//               className="bg-[#222] text-white px-6 py-2 rounded mt-6 w-full hover:bg-[#0d6c39]"
//               onClick={handleEditProfile} // Call validation function
//             >
//               Edit Profile
//             </button>
//           </div>
//         )}

//         <h2 className="text-xl font-bold text-[#333] mt-6">Your Booked Houses</h2>
        
//         {bookings.length === 0 ? (
//           <p className="text-gray-600">No bookings found</p>
//         ) : (
//           <div className="space-y-4 mt-4">
//             {bookings.map((booking) => (
//               <div key={booking._id} className="bg-white p-4 border rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-[#222]">{booking.houseId.name}</h3>
//                 <p className="text-[#555]">Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
//                 <p className="text-[#555]">Duration: {booking.duration} months</p>
//                 <p className="text-[#555]">Total Price: ₹{booking.totalPrice}</p>
//                 <p className="text-[#555]">Status: <span className="font-semibold">{booking.request}</span></p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import Shimmer from './shimmer'; // Placeholder component for loading state

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const [bookings, setBookings] = useState([]); // State for tenant bookings
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [paymentLoading, setPaymentLoading] = useState(false); // State for payment processing
  const [error, setError] = useState(null); // State for errors
  const navigate = useNavigate(); // React Router navigation hook

  // Fetch profile details along with bookings
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/userProfile', { withCredentials: true });
        console.log(response); // Log the full response for debugging
        setUser(response.data.user); // Set user data
        setBookings(response.data.bookings || []); // Set bookings data (empty array if no bookings)
      } catch (err) {
        setError(err.response ? err.response.data.message : 'An error occurred');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
  }, []);

  // Handle payment process
  const handlePayment = async (bookingId) => {
  setPaymentLoading(true); // Start payment loading
  try {
    // Send payment update request to the backend
    const response = await axios.post(
      '/api/updatePayment',
      { bookingId },
      { withCredentials: true }
    );

    alert(response.data.message); // Show success message

    // Update status for the corresponding booking in the frontend state
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === bookingId
          ? { ...booking, request: 'Paid', paymentStatus: 'completed' }
          : booking
      )
    );
  } catch (err) {
    alert('Payment failed. Please try again.');
  } finally {
    setPaymentLoading(false); // Stop payment loading
  }
};



  // Validation before navigating to edit page
  const handleEditProfile = () => {
    navigate('/profileUpdate'); // Navigate to edit profile page
  };

  // Render profile details or loading/error state
  if (loading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-[#f7f7f7]">
      <div className="container w-[40%] p-8 border border-solid border-[#222] rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4 text-[#222]">Your Profile</h1>
        
        {user && (
          <div>
            <p className="text-lg text-[#333]"><strong>Name:</strong> {user.name}</p>
            <p className="text-lg text-[#333]"><strong>Email:</strong> {user.email}</p>
            <p className="text-lg text-[#333]"><strong>Role:</strong> {user.role}</p>
            {user.contactNumber && <p className="text-lg text-[#333]"><strong>Contact Number:</strong> {user.contactNumber}</p>}
            {user.address && <p className="text-lg text-[#333]"><strong>Address:</strong> {user.address}</p>}

            <button
              className="bg-[#222] text-white px-6 py-2 rounded mt-6 w-full hover:bg-[#0d6c39]"
              onClick={handleEditProfile} // Call validation function
            >
              Edit Profile
            </button>
          </div>
        )}

        <h2 className="text-xl font-bold text-[#333] mt-6">Your Booked Houses</h2>
        
        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings found</p>
        ) : (
          <div className="space-y-4 mt-4">
            {bookings.map((booking) => (
              <div key={booking._id} className="bg-white p-4 border rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-[#222]">{booking.houseId.name}</h3>
                <p className="text-[#555]">Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                <p className="text-[#555]">Duration: {booking.duration} months</p>
                <p className="text-[#555]">Total Price: ₹{booking.totalPrice}</p>
                <p className="text-[#555]">Status: <span className="font-semibold">{booking.request}</span></p>
                
                {booking.request === 'accepted' && (
                  <button
                    className="bg-[#118B50] text-white px-4 py-2 rounded mt-2 hover:bg-[#0d6c39] disabled:bg-gray-400 disabled:cursor-not-allowed"
                    onClick={() => handlePayment(booking._id)}
                    disabled={paymentLoading}
                  >
                    {paymentLoading ? 'Processing...' : 'Make Payment'}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
