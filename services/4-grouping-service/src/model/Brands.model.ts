import mongoose, { Schema } from 'mongoose';
import { IBrands } from '@grouping/utils/Brand.interface';

const BrandsSchema: Schema<IBrands> = new Schema(
  {
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    branches: {
      type: [
        {
          name: { type: String },
          province: { type: Number },
          city: { type: Number },
          address: { type: String },
          workingTime: {
            type: [
              {
                day: String,
                from: String,
                to: String
              }
            ],
            default: []
          }
        }
      ],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<IBrands>('Brands', BrandsSchema);
