import { IDetails } from '@details/utils/Details.interface';
import mongoose, { Schema } from 'mongoose';

const DetailsSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    nationalCode: { type: String },
    essentialContact: { type: String },
    dateOfBirth: { type: String },
    addresses: [
      {
        province: { type: Number },
        city: { type: Number },
        postalCode: { type: Number },
        pelak: { type: Number },
        address: { type: String }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<IDetails>('Details', DetailsSchema);
