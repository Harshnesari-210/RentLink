// // import React, { useState, useContext } from 'react';
// // import axios from 'axios';
// // import rentlink from "../assets/rentlink.jpg";
// // import { useNavigate } from 'react-router-dom';
// // import { context } from "../main.jsx";

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const [success, setSuccess] = useState('');
// //     const { setIsauthorised, setUser } = useContext(context);
// //    // console.log("hiii")
// //     // console.log('setIsauthorised:', setIsauthorised);
// //     //  console.log('setUser:', setUser);

// //      const navigate = useNavigate();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const response = await axios.post("http://localhost:3000/login", {
// //                 email,
// //                 password,
// //             }, {
// //                 withCredentials: true, // Ensures cookies are sent with the request
// //             });

// //             setSuccess(response.data.message);
// //              setIsauthorised(true)
// //              setUser(response.data.user);
// //              //console.log('User data from response:', response.data.user);

// //             setError('');
// //             // Redirect to the profile page or dashboard
// //             navigate('/');
// //         } catch (err) {
// //             if (err.response) {
// //                 // Backend responded with an error (4xx or 5xx)
// //                 setError(err.response.data.message);
// //             } else if (err.request) {
// //                 // Request was made, but no response received
// //                 setError("No response from server. Please try again later.");
// //             } else {
// //                 // Something else caused the error
// //                 setError("An unexpected error occurred. Please try again.");
// //             }
// //             setSuccess('');
// //         }
// //     };

// //     return (
// //         <div className="h-[100vh] w-full flex items-center justify-center bg-white">
// //             <div className="container w-[30%] p-8 border border-solid border-black rounded-lg shadow-lg bg-white">
// //                 {/* Logo Section */}
// //                 <div className="logo-container flex justify-center mb-4">
// //                     <img
// //                         src={rentlink}
// //                         alt="rentlink logo"
// //                         className="h-24 w-24 object-cover"
// //                     />
// //                 </div>

// //                 {/* Header Section */}
// //                 <div className="w-full text-center mb-6">
// //                     <h1 className="text-3xl font-bold text-[#222]">Welcome Back!</h1>
// //                     <p className="text-[#333333] text-lg">Log in to continue</p>
// //                 </div>

// //                 {/* Error or Success Messages */}
// //                 {error && <p className="text-red-500 text-center">{error}</p>}
// //                 {success && <p className="text-green-500 text-center">{success}</p>}

// //                 {/* Login Form */}
// //                 <form onSubmit={handleLogin} className="w-full flex flex-col gap-6 px-6">
// //                     <div className="email-field w-full">
// //                         <input
// //                             type="email"
// //                             placeholder="Enter Your Email"
// //                             name="email"
// //                             id="email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#333333] text-lg"
// //                         />
// //                     </div>
// //                     <div className="password-field w-full">
// //                         <input
// //                             type="password"
// //                             name="password"
// //                             id="password"
// //                             placeholder="Enter Password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#333333] text-lg"
// //                         />
// //                     </div>
// //                     <button
// //                         type="submit"
// //                         className="w-full bg-[#222] text-white py-3 rounded-lg text-lg hover:bg-[#37A772] transition-all"
// //                     >
// //                         Log In
// //                     </button>
// //                 </form>

// //                 {/* Footer Section */}
// //                 <div className="mt-4">
// //                     <p className="text-md text-[#333333]">
// //                         Don't have an account?{" "}
// //                         <span className="text-[#222] font-semibold cursor-pointer hover:underline">
// //                             <a href="/registration" className="text-[#222] font-semibold">
// //                                 Signup here
// //                             </a>
// //                         </span>
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;


// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import rentlink from "../assets/rentlink.jpg";
// import { useNavigate } from 'react-router-dom';
// import { context } from "../main.jsx";

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const { setIsauthorised, setUser } = useContext(context);

//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post("http://localhost:3000/login", {
//                 email,
//                 password,
//             }, {
//                 withCredentials: true,
//             });

//             setSuccess(response.data.message);
//             setIsauthorised(true);
//             setUser(response.data.user);

//             setError('');
//             navigate('/');
//         } catch (err) {
//             if (err.response) {
//                 setError(err.response.data.message);
//             } else if (err.request) {
//                 setError("No response from server. Please try again later.");
//             } else {
//                 setError("An unexpected error occurred. Please try again.");
//             }
//             setSuccess('');
//         }
//     };

//     return (
//         <div className="h-[100vh] flex items-center justify-center bg-[#ededed]">
//             <div className="container w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] p-8 border border-solid border-[#222] rounded-lg shadow-xl bg-white">
//                 {/* Logo Section */}
//                 <div className="flex justify-center mb-6">
//                     <img
//                         src={rentlink}
//                         alt="rentlink logo"
//                         className="h-28 w-28 object-cover"
//                     />
//                 </div>

//                 {/* Header Section */}
//                 <div className="w-full text-center mb-6">
//                     <h1 className="text-3xl font-semibold text-[#222]">Welcome Back!</h1>
//                     <p className="text-[#222] text-lg">Log in to continue</p>
//                 </div>

//                 {/* Error or Success Messages */}
//                 {error && <p className="text-red-500 text-center">{error}</p>}
//                 {success && <p className="text-green-500 text-center">{success}</p>}

//                 {/* Login Form */}
//                 <form onSubmit={handleLogin} className="w-full flex flex-col gap-6 px-6">
//                     <div className="email-field w-full">
//                         <input
//                             type="email"
//                             placeholder="Enter Your Email"
//                             name="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full border border-[#222] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] text-lg"
//                         />
//                     </div>
//                     <div className="password-field w-full">
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="Enter Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full border border-[#222] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] text-lg"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-[#222] text-white py-3 rounded-lg text-lg hover:bg-[#111] transition-all"
//                     >
//                         Log In
//                     </button>
//                 </form>

//                 {/* Footer Section */}
//                 <div className="mt-6 text-center">
//                     <p className="text-md text-[#222]">
//                         Don't have an account?{" "}
//                         <span className="text-[#222] font-semibold cursor-pointer hover:underline">
//                             <a href="/registration">Signup here</a>
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState, useContext } from 'react';
import axios from 'axios';
import rentlink from "../assets/rentlink.jpg";
import { useNavigate } from 'react-router-dom';
import { context } from "../main.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { setIsauthorised, setUser } = useContext(context);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/login", {
                email,
                password,
            }, {
                withCredentials: true,
            });

            setSuccess(response.data.message);
            setIsauthorised(true);
            setUser(response.data.user);

            setError('');
            navigate('/');
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else if (err.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
            setSuccess('');
        }
    };

    return (
        <div className="h-[100vh] flex bg-[#ededed]">
            {/* Left Side: Video */}
            <div className="hidden lg:flex w-1/2 items-center justify-center ">
                <video
                    src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover rounded-l-lg"
                />
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white rounded-r-lg shadow-xl">
                <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[80%] max-w-lg">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={rentlink}
                            alt="rentlink logo"
                            className="h-20 w-20 object-cover"
                        />
                    </div>

                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-semibold text-[#222]">Welcome Back!</h1>
                        <p className="text-[#222] text-lg">Log in to continue</p>
                    </div>

                    {/* Error or Success Messages */}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="flex flex-col gap-6">
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-[#222] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] text-lg"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-[#222] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] text-[#222] text-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#222] text-white py-3 rounded-lg text-lg hover:bg-[#111] transition-all"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Footer Section */}
                    <div className="mt-6 text-center">
                        <p className="text-md text-[#222]">
                            Don't have an account?{" "}
                            <span className="text-[#222] font-semibold cursor-pointer hover:underline">
                                <a href="/registration">Signup here</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
