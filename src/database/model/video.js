import mongoose from "mongoose";

const COLLECTION_NAME = "Video";
const DOCUMENT_NAME = "videos";

const videoSchema = new mongoose.Schema({
  videoUrl: { type: String, required: true },
});

export const VideoModel = mongoose.model(
  COLLECTION_NAME,
  videoSchema,
  DOCUMENT_NAME
);
