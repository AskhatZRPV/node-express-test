import mongoose, { Schema, model } from "mongoose";
import Photo from "../interface/photo.interface";

const photoSchema = new mongoose.Schema<Photo>({
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    unique: false,
  },
  url: {
    type: String,
    required: true,
    unique: false,
  },
  thumbnailUrl: {
    type: String,
    required: true,
    unique: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const PhotoModel = model<Photo>("Photo", photoSchema);

export default PhotoModel;
