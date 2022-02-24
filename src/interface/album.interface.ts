import User from "./user.interface";
import { PopulatedDoc } from 'mongoose';

export default interface Album {
  title: String;
  owner: PopulatedDoc<User>
}