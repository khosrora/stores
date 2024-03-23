import { Document } from 'mongoose';

export interface IUser extends Document {
  phoneNumber: string;
  otpCode: number;
  isSeller: boolean;
}