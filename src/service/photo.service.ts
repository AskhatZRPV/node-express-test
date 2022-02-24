import PhotoModel from "../model/photo.model";
import { getAlbumId } from "./album.service";
import LoadPhoto from "../interface/loadPhotos.interface";
import mongoose from "mongoose";

export async function loadPhotosService(
  input: LoadPhoto[],
  user: string
): Promise<void> {
  try {
    for (const photo of input) {
      const { albumId, title, url, thumbnailUrl } = photo;
      const refAlbumId = await getAlbumId(albumId, user);
      const orgObject = {
        albumId: refAlbumId,
        title,
        url,
        thumbnailUrl,
        owner: user,
      };
      await PhotoModel.create(orgObject);
    }
    return
  } catch (error) {
    throw error;
  }
}

export async function getPhotos(
  maxcount: number,
  page: number,
  owner?: string
): Promise<LoadPhoto[]> {
  const skip = page * maxcount - maxcount;
  try {
    if (typeof owner !== "undefined") {
      const found = await PhotoModel.aggregate([
        { $match: { owner: new mongoose.Types.ObjectId(owner) } },
        { $sort: { order_number: -1 } },
        {
          $facet: {
            metadata: [{ $count: "total" }],
            data: [{ $skip: skip }, { $limit: maxcount }],
          },
        },
      ]);
      return found[0].data;
    } else {
      const found = await PhotoModel.aggregate([
        { $sort: { order_number: -1 } },
        {
          $facet: {
            metadata: [{ $count: "total" }],
            data: [{ $skip: skip }, { $limit: maxcount }],
          },
        },
      ]);
      return found[0].data;
    }
  } catch (error) {
    throw error;
  }
}

export async function deletePhotos(
  input: string[],
  user: string
): Promise<void> {
  try {
    for (const element of input) {
      await PhotoModel.deleteOne({ _id: element, owner: user });
    }
    return;
  } catch (error) {
    throw error;
  }
}

export async function deletePhotosByAlbumId(input: string[], user: string) {
  try {
    for (const element of input) {
      await PhotoModel.deleteMany({ albumId: element, owner: user });
    }
  } catch (error) {
    throw error;
  }
}
