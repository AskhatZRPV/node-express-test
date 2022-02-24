import { PopulatedDoc } from 'mongoose';
import Album from './album.interface';
import User from './user.interface';

export default interface Photo {
  albumId: PopulatedDoc<Album>;
  title: string;
  url: string;
  thumbnailUrl: string;
  owner: PopulatedDoc<User>;
}
