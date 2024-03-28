import { Document, Types } from 'mongoose';

export interface ICategories extends Document {
  name: string;
  parent_id?: Types.ObjectId | string;
  description: string;
}

export type category = {
  name: string;
  parent_id?: Types.ObjectId | string;
  description: string;
};
