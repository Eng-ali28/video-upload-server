import express from "express";
import "dotenv/config";
import cors from "cors";

import { dbConnection } from "./src/database/index.js";
import videoRouter from "./src/routes/video.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/video", videoRouter);

app.listen(process.env.PORT, () => {
  dbConnection();
  console.log("Server run on PORT:", process.env.PORT);
});
