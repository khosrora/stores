import { Document, Types } from 'mongoose';

export interface IBrands extends Document {
  name: string;
  logo?: string;
  description: string;
  branches: [branch];
}

export type brand = {
  name: string;
  parent_id?: Types.ObjectId | string;
  description: string;
};

export type branch = {
  name: string;
  province: number;
  city: number;
  address: string;
  workingTime: [workingTime];
};

export type workingTime = {
  day: string;
  from: string;
  to: string;
};
