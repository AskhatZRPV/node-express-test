import mongoose, { Schema, model } from "mongoose";
import Album from "../interface/album.interface";

const albumSchema = new mongoose.Schema<Album>({
  title: {
    type: String, 
    required: true, 
    unique: false
  },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
});

const AlbumModel = model<Album>('Album', albumSchema);

export default AlbumModel;
