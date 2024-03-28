import mongoose, { Schema } from 'mongoose';
import { IBrands } from '@grouping/utils/Brand.interface';

const BrandsSchema: Schema<IBrands> = new Schema(
  {
    name: { type: String, required: true, index: true },
    logo: { type: String, required: false },
    description: { type: String, required: true },
    branches: {
      type: [
        {
          name: { type: String },
          province: { type: Number },
          city: { type: String },
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
