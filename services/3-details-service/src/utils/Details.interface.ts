import { Document } from 'mongoose';

export type AddressType = {
  province: number;
  city: number;
  postalCode: number;
  pelak: number;
  address: string;
};

export interface IDetails extends Document {
  user?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  nationalCode?: string;
  essentialContact?: string;
  dateOfBirth?: string;
  addresses?: [AddressType];
}
