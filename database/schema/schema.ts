
import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
  Transport: [
    {
      CarPlate: String;
      Time: Number;
      overload: Number;
      Picture: String;
    }
  ];
}

export const UserSchema = new mongoose.Schema({
  Transport: [
    {
      CarPlate: String,
      Time: Number,
      overload: Number,
      Picture: String,
    },
  ],
});

export const User:any = mongoose.model<IUser>("Data", UserSchema);