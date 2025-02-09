import { Router } from "express";
import { getWebsites } from "../controllers/websitesController.js";

const router = Router();

router.get("/", getWebsites);

export default router;
