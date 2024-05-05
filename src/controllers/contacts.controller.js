import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Contact } from "../models/contactform.js";

const postContact = asyncHandler(async (req, res) => {
  const { fullname, email, mobile, subject, note } = req.body;
  if (
    [fullname, email, mobile, subject, note].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields required");
  }

  const data = await Contact.create({
    fullname,
    email,
    mobile,
    subject,
    note,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getContacts = asyncHandler(async (req, res) => {
  const data = await Contact.find({});

  return res
    .status(200)
    .json(new ApiResponse(200, data, "data send successfully"));
});
export { postContact, getContacts };
