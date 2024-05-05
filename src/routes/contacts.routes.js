import { Router } from "express";

import { upload } from "../middlewares/multer.middlewares.js";
import {
  getContacts,
  postContact,
} from "../controllers/contacts.controller.js";

const router = Router();

router
  .route("/postContact")
  .post(upload.fields([{ name: "img", maxCount: 1 }]), postContact);

router.route("/getContact").get(getContacts);
export default router;
