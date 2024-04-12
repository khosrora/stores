// import { ICategories } from '@grouping/utils/Categories.interface';
import mongoose, { Schema } from 'mongoose';
import { Attribute, IProductDoc, Specifications, TypesProducts } from '@products/utils/productType';

const attributesSchema = new mongoose.Schema<Attribute>({
  key: String,
  value: String
});

const specificationsSchema = new mongoose.Schema<Specifications>({
  key: String,
  value: String
});

const typesOfsSchema = new mongoose.Schema<TypesProducts>({
  color: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: Number, required: true }
});

const ProductsSchema: Schema = new Schema<IProductDoc>(
  {
    name: { type: String, required: true },
    uniqueCode: { type: String, required: true },
    brand: { type: String, required: true },
    store: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    attributes: [attributesSchema],
    specifications: [specificationsSchema],
    typesOf: [typesOfsSchema],
    like: { type: Number, default: 0 },
    disLike: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<IProductDoc>('Products', ProductsSchema);
