import { Schema, model } from 'mongoose';
import { StationeryProduct } from './product/product.interface';

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<StationeryProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: [
    'Writing',
    'Office Supplies',
    'Art Supplies',
    'Educational',
    'Technology',
  ],
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// creating Product Model
export const ProductModel = model<StationeryProduct>('Product', productSchema);
