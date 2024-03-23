import { Document } from 'mongoose';

export interface IDetails extends Document {
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  nationalCode: string;
  essentialContact: string;
  dateOfBirth: string;
  addresses: [
    {
      province: number;
      city: number;
      postalCode: number;
      pelak: number;
      address: string;
    }
  ];
}
