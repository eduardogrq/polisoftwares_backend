import express from "express";
import {
  getWebsites,
  getWebsitesByName,
} from "../controllers/websitesController.js";

const router = express.Router();

router.get("/", getWebsites);
router.get("/search", getWebsitesByName);

export default router;
