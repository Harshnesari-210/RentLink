// import express from "express"
// import isAuth from "../middlewares/auth.js";
// import { House } from "../models/landLord.js";
// const homeRouter=express.Router();

// homeRouter.post("/addHouse", isAuth, async (req,res)=>{
//     const {homeId,role}=req.user;


//     if(role==="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//     const {hometype,location,bedrooms,beds,bathrooms,amenities,expired,price}=req.body;

//     const newHouse=new House({
//         homeId,hometype,location,bedrooms,beds,bathrooms,amenities,expired,price
//     })

//     await newHouse.save();

//     res.status(200).json({
//         message:"New house added"
//     })
// })

// homeRouter.put("/updateHouse/:id", isAuth, async (req,res)=>{
//   const {landlord_id, role}=req.user;

//   if(role=="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//   const {id}=req.params;

//   const updatedHouse=await House.findByIdAndUpdate(id,req.body,{
//     new:true,
//     runValidator:true,
//     useFindAndModified:false
//   })

//   res.json({
//     message:"home updated",
//     updatedHouse
//   })

  

   
// })

// homeRouter.post("/deleteHouse/:id", isAuth, async (req,res)=>{
//   const {id}=req.params;
//   const {role}=req.user;

//   if(role=="Tenent")
//     {
//       return res.status(400).json({
//         message:"Tenent cannot have access to add the house"
//       })
//     }

//   const job=await House.findById(id);

//   if(!job)
//   {
//     return res.json({
//       message:"ooops job not found"
//     })
//   }

//   await job.deleteOne();

//   res.status(200).json({
//     message:"Job deleted sucessfully"
//   })
// })

// export default homeRouter;


// import express from "express";
// import isAuth from "../middlewares/auth.js";
// import { House } from "../models/landLord.js";

// const homeRouter = express.Router();

// // Add House
// homeRouter.post("/addHouse", isAuth, async (req, res) => {
//   const { _id: homeId, role } = req.user;

//   if (role === "Tenant") {
//     return res.status(400).json({
//       message: "Tenant cannot have access to add the house",
//     });
//   }

//   const {
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     amenities,
//     expired,
//     price,
//     title,
//     description,
//   } = req.body;

//   // Create a new house
//   const newHouse = new House({
//     homeId,
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     amenities,
//     expired,
//     price,
//     title,
//     description,
//   });

//   try {
//     await newHouse.save();

//     res.status(200).json({
//       message: "New house added successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Error while adding house",
//       error: error.message,
//     });
//   }
// });



// import express from "express";
// import multer from "multer";
// import path from "path";
// import isAuth from "../middlewares/auth.js";
// import { House } from "../models/landLord.js";

// const homeRouter = express.Router();

// // Multer setup for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Directory where files will be stored
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase()) && 
//                   allowedTypes.test(file.mimetype);
//   if (isValid) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only JPEG, JPG, and PNG files are allowed"));
//   }
// };

// const upload = multer({ storage, fileFilter });

// // Add House
// homeRouter.post("/addHouse", isAuth, upload.single("coverImage"), async (req, res) => {
//   const { _id: homeId, role } = req.user;
  
//  // console.log(req.body);
//  // console.log(req.file);

//   if (role === "Tenant") {
//     return res.status(400).json({
//       message: "Tenant cannot have access to add the house",
//     });
//   }

//   const {
//     hometype,
//     location,
//     bedrooms,
//     beds,
//     bathrooms,
//     amenities,
//     expired,
//     price,
//     title,
//     description,
//   } = req.body;

   
//   console.log(req.file)

//   if (!req.file) {
//     return res.status(400).json({ message: "Cover image is required" });
//   }

// const imagePath = `/uploads/${req.file.filename}`; // Correct usage: access file via req.file

// // Pass the imagePath to the house data being saved
// const newHouse = new House({
//   homeId,
//   hometype,
//   location,
//   bedrooms,
//   beds,
//   bathrooms,
//   amenities,
//   description,
//   title,
//   price,
//   coverImage: imagePath,  // Save the relative path to the database
// });


//   try {
//     await newHouse.save();

//     res.status(200).json({
//       message: "New house added successfully",
//       house: newHouse,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Error while adding house",
//       error: error.message,
//     });
//   }
// });


import express from "express";
import multer from "multer";
import path from "path";
import isAuth from "../middlewares/auth.js";
import { House } from "../models/landLord.js";

const homeRouter = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|avif/;
  const isValid = 
    allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
    allowedTypes.test(file.mimetype);
  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG, and PNG files are allowed"));
  }
};

const upload = multer({ storage, fileFilter });

// Add House
homeRouter.post("/addHouse", isAuth, upload.single("coverImage"), async (req, res) => {
  const { _id: homeId, role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({ message: "Tenants cannot add houses" });
  }

  const {
    hometype,
    location,
    bedrooms,
    beds,
    bathrooms,
    amenities,
    description,
    title,
    price,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Cover image is required" });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  const newHouse = new House({
    homeId,
    hometype,
    location,
    bedrooms,
    beds,
    bathrooms,
    amenities,
    description,
    title,
    price,
    coverImage: imagePath,
  });

  try {
    await newHouse.save();
    res.status(200).json({
      message: "New house added successfully",
      house: newHouse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error while adding house",
      error: error.message,
    });
  }
});





// Update House
homeRouter.delete("/deleteHouse/:houseId", isAuth, async (req, res) => {
  const { role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({ message: "Tenants cannot delete houses" });
  }

  const { houseId } = req.params;

  try {
    const house = await House.findById(houseId);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    await house.deleteOne();
    res.status(200).json({ message: "House deleted successfully" });
  } catch (error) {
    console.error("Error deleting house:", error);
    res.status(500).json({ message: "Error deleting house", error: error.message });
  }
});

// Delete House
homeRouter.put("/updateHouse/:id", isAuth, async (req, res) => {
  const { role } = req.user;

  if (role === "Tenant") {
    return res.status(400).json({ message: "Tenants cannot update houses" });
  }

  const { id } = req.params;

  try {
    const updatedHouse = await House.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ message: "House updated successfully", updatedHouse });
  } catch (error) {
    console.error("Error updating house:", error);
    res.status(500).json({ message: "Error updating house", error: error.message });
  }
});


export default homeRouter;
