import { IUser } from '@auth/utils/User.interface';
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema<IUser>(
  {
    phoneNumber: { type: String, required: true, unique: true },
    otpCode: { type: String, required: true, unique: true },
    isSeller: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<IUser>('User', UserSchema);
