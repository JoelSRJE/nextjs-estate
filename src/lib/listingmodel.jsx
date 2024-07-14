import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
  poster: {
    type: Schema.Types.ObjectId,
    ref: "uploads.files",
    required: true,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "uploads.files",
      required: false,
    },
  ],
  city: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  zipcode: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: false,
  },
  rooms: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
