import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Destinations } from "../models/destination.model.js";

const postDestination = asyncHandler(async (req, res) => {
  const { destination, description, price, duration, distance } = req.body;
  if (
    [destination, description, price, distance, duration].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields required");
  }

  const path = req.files?.img[0]?.path;
  let url1 = await uploadOnCloudinary(path);

  const data = await Destinations.create({
    imgurl: url1?.url,
    destination,
    description,
    price,
    distance,
    duration,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getDestinations = asyncHandler(async (req, res) => {
  const data = await Destinations.find({});

  return res.status(200).json(new ApiResponse(200, data, "data fetched"));
});

export { postDestination, getDestinations };
