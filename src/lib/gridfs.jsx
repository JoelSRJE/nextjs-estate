import mongoose from "mongoose";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import gridfsStream from "gridfs-stream";
import connectToDB from "./dbConnect";

const connection = connectToDB();

let gfs, gridfsBucket;

connect.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "uploads",
  });
  gfs = gridfsStream(connection.db, mongoose.mongo);
  gfs.collection("uploads");
});

const storage = new GridFsStorage({
  url: process.env.NEXT_PUBLIC_MONGODB_URI,
  file: (req, file) => {
    return {
      bucketName: "uploads",
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

export { upload, gfs, gridfsBucket };
