// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const Book = () => {
//   const { id } = useParams(); // Get the id directly from the URL
//   const [house, setHouse] = useState(null);
//   const [bookingDate, setBookingDate] = useState("");
//   const [duration, setDuration] = useState("");
//   const [paymentStatus, setPaymentStatus] = useState("pending");
//   const [totalPrice, setTotalPrice] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the house details from the backend
//     const fetchHouseDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/tenent/displayHouse/${id}`,
//           { withCredentials: true }
//         );
//         setHouse(response.data); // Set the fetched house data
//       } catch (error) {
//         console.error("Error fetching house data:", error);
//       }
//     };

//     fetchHouseDetails();
//   }, [id]);

//   const handleDurationChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && house) {
//       setDuration(value);
//       setTotalPrice(value * house.price); // Update total price dynamically
//     } else {
//       setDuration("");
//       setTotalPrice(0);
//     }
//   };

//   const handleBooking = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:3000/bookHouse/${id}`,
//         { bookingDate, duration, paymentStatus },
//         { withCredentials: true }
//       );
//       if (response.data.success) {
//         alert(response.data.message);
//         navigate("/profile"); // Redirect to profile page or another page
//       }
//     } catch (error) {
//       console.error("Error booking the house:", error);
//       alert("Failed to book the house. Please try again.");
//     }
//   };

//   if (!house) {
//     return <div className="text-center mt-20 text-gray-600">Loading...</div>;
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-[#ededed] border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-green-700 mb-4">{house.name}</h2>
//       <p className="text-gray-600 mb-2">{house.description}</p>
//       <p className="text-lg font-medium text-gray-800 mb-2">
//         Price per month: ₹{house.price}
//       </p>
//       <p className="text-lg font-medium text-gray-800 mb-4">
//         Total Price for {duration || 0} month(s):{" "}
//         <span className="text-green-700">₹{totalPrice}</span>
//       </p>

//       {/* Booking Form */}
//       <div className="space-y-4">
//         <div>
//           <label className="block font-medium text-gray-700">Booking Date</label>
//           <input
//             type="date"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>

//         <div>
//           <label className="block font-medium text-gray-700">
//             Duration (in months)
//           </label>
//           <input
//             type="number"
//             value={duration}
//             placeholder="Enter months"
//             onChange={handleDurationChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>

//         <div>
//           <label className="block font-medium text-gray-700">
//             Payment Status
//           </label>
//           <select
//             value={paymentStatus}
//             onChange={(e) => setPaymentStatus(e.target.value)}
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="pending">Pending</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>

//         <button
//           onClick={handleBooking}
//           className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
//         >
//           Book House
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Book;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [bookingDate, setBookingDate] = useState("");
  const [duration, setDuration] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(
          `/api/tenent/displayHouse/${id}`,
          { withCredentials: true }
        );
        setHouse(response.data);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouseDetails();
  }, [id]);

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && house) {
      setDuration(value);
      setTotalPrice(value * house.price);
    } else {
      setDuration("");
      setTotalPrice(0);
    }
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post(
        `/api/bookHouse/${id}`,
        { bookingDate, duration, paymentStatus },
        { withCredentials: true }
      );
      if (response.data.success) {
        alert(response.data.message);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error booking the house:", error);
      alert("Failed to book the house. Please try again.");
    }
  };

  if (!house) {
    return <div className="text-center mt-20 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 p-6 bg-[#ededed] border rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Video Section */}
      <div className="flex justify-center items-center mb-6">
      <video
  data-testid="video-player"
  className="w-full h-auto rounded-lg object-cover"
  autoPlay
  muted
  loop  // This will make the video play infinitely
  crossOrigin="anonymous"
  playsInline
  preload="auto"
>
  <source
    src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
    type="video/mp4"
  />
</video>


      </div>

      {/* Booking Form Section */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">{house.name}</h2>
        <p className="text-gray-600 mb-2">{house.description}</p>
        <p className="text-lg font-medium text-gray-800 mb-2">
          Price per month: ₹{house.price}
        </p>
        <p className="text-lg font-medium text-gray-800 mb-4">
          Total Price for {duration || 0} month(s):{" "}
          <span className="text-green-700">₹{totalPrice}</span>
        </p>

        {/* Booking Form */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Booking Date</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Duration (in months)</label>
            <input
              type="number"
              value={duration}
              placeholder="Enter months"
              onChange={handleDurationChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Payment Status</label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
          >
            Book House
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
