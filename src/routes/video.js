import express from "express";
import { createVideo, getVideos } from "../controller/video.js";

const router = express.Router();

router.post("/", createVideo);
router.get("/", getVideos);

export default router;
