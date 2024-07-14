import { GridFSBucket, ObjectId } from "mongodb";
import Property from "@/lib/listingmodel";
import connectToDB from "@/lib/dbConnect";
import multer from "multer";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export async function POST(req, res) {
  await runMiddleware(
    req,
    res,
    upload.fields([
      { name: "poster", maxCount: 1 },
      { name: "images", maxCount: 10 },
    ])
  );
  console.log("Files received:", req.files);
  if (req.method === "POST") {
    try {
      await connectToDB();

      const { files, body } = req;

      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "uploads",
      });

      const storeFile = async (file) => {
        return new Promise((resolve, reject) => {
          const uploadStream = bucket.openUploadStream(file.originalname);
          uploadStream.end(file.buffer);

          uploadStream.on("error", (error) => {
            reject(error);
          });

          uploadStream.on("finish", (file) => {
            resolve(file._id);
          });
        });
      };

      const posterFileId = await storeFile(files.poster[0]);
      const imageFileIds = await Promise.all(
        files.images.map((file) => storeFile(file))
      );

      const property = new Property({
        poster: new ObjectId(posterFileId),
        images: imageFileIds.map((id) => new ObjectId(id)),
        city: body.city,
        address: body.address,
        zipcode: body.zipcode,
        type: body.type,
        floor: body.floor,
        size: body.size,
        rooms: body.rooms,
        price: body.price,
      });

      await property.save();

      return NextResponse.json(
        { message: "Successfully registered property" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error handling property upload:", error);
      return NextResponse.json(
        { message: "An error occured while registering property" },
        { status: 500 }
      );
    }
  }
}
