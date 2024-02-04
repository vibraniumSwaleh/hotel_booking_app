import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String.fromCharCode,
  perks: [String],
  extrInfo: Sting,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

const PlaceModel = mongoose.model("Place", placeSchema);

export default PlaceModel;
