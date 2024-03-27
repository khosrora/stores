import { ICategories } from '@categories/utils/Categories.interface';
import mongoose, { Schema } from 'mongoose';

const CategoriesSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<ICategories>('Categories', CategoriesSchema);
