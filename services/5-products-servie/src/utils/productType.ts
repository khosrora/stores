import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for product attributes
export interface Attribute {
  key: string;
  value: string;
}

// Define the schema for product attributes
export interface Specifications {
  key: string;
  value: string;
}

// Define the schema for product attributes
export interface TypesProducts {
  color: string;
  price: string;
  count: number;
}

export interface IProductDoc extends Document {
  name: string;
  price: number;
  uniqueCode: string;
  brand: string;
  store: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  attributes: Attribute[];
  specifications: Specifications[];
  typesOf: TypesProducts[];
  like: number;
  disLike: number;
  isActive: boolean;
}
