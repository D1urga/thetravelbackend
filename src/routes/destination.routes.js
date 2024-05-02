import { Router } from "express";
import {
  getDestinations,
  postDestination,
} from "../controllers/destinations.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router
  .route("/postDestination")
  .post(upload.fields([{ name: "img", maxCount: 1 }]), postDestination);

router.route("/getDestination").get(getDestinations);
export default router;
