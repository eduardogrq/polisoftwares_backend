import express from "express";
import {
  getApplications,
  getApplicationsByName,
} from "../controllers/applicationsController.js";

const router = express.Router();

router.get("/", getApplications);
router.get("/search", getApplicationsByName);

export default router;
