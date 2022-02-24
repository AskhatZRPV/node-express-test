import AlbumModel from "../model/album.model";
import { Types, ObjectId } from "mongoose";
import { deletePhotosByAlbumId } from "./photo.service";

export async function getAlbumId(
  albumId: string,
  owner: string
): Promise<Types.ObjectId> {
  const album = await AlbumModel.findOne({ title: albumId });
  if (!album) {
    const newAlbum = await AlbumModel.create({ title: albumId, owner: owner });
    return newAlbum._id;
  } else {
    return album._id;
  }
}

export async function deleteAlbums(
  input: string[],
  user: string
): Promise<void> {
  try {
    await deletePhotosByAlbumId(input, user);
    for (const element of input) {
      await AlbumModel.deleteOne({ _id: element, owner: user });
    }
    return;
  } catch (error) {
    throw error;
  }
}

export async function changeAlbumTitle(
  albumId: string,
  newTitle: string,
  user: string
): Promise<void> {
  try {
    await AlbumModel.updateOne(
      { _id: albumId, owner: user },
      { title: newTitle }
    );
    return;
  } catch (error) {
    throw error;
  }
}
