import { VideoModel } from "../database/model/video.js";

export const createVideo = async (req, res, next) => {
  const videoUrl = req.body.videoUrl;

  const doc = await VideoModel.create({ videoUrl });

  res.status(201).send(doc);
};

export const getVideos = async (req, res, next) => {
  const videoUrl = req.body.videoUrl;

  const doc = await VideoModel.find();

  res.status(200).send(doc);
};
