import mongoose from "mongoose";
import { type } from "os";

const destinationSchema = new mongoose.Schema(
  {
    imgurl: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
  },
  {}
);

export const Destinations = mongoose.model("Destinations", destinationSchema);
