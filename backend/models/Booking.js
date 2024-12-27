import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    houseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",

    },
    landlordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",

    },
    bookingDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number, // Duration in months
      required: true,
    },
    price: {
      type: Number // Monthly price of the house
    },
    totalPrice: {
      type: Number
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;