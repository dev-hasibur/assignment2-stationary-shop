import { Schema, model } from 'mongoose';
import { StationeryProduct } from './product/product.interface';

// Create a Schema corresponding to the document interface.
const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required.'],
    minlength: [3, 'Name must be at least 3 characters long.'], // Example validation
  },
  brand: {
    type: String,
    trim: true,
    required: [true, 'Brand is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
    min: [0, 'Price must be a positive number.'], // Ensure non-negative price
  },
  category: {
    type: String,
    trim: true,
    enum: {
      values: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      message:
        'Category must be one of Writing, Office Supplies, Art Supplies, Educational, or Technology.',
    },
    required: [true, 'Category is required.'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Description is required.'],
    maxlength: [500, 'Description cannot exceed 500 characters.'], // Example validation
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required.'],
    min: [1, 'Quantity must be at least 1.'], // Ensure a minimum quantity
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required.'],
  },
});

// Adding pre-save hooks for validation
productSchema.pre('save', function (next) {
  if (this.quantity > 0 && !this.inStock) {
    return next(
      new Error('In-stock status must be true if quantity is greater than 0.'),
    );
  }
  next();
});

// creating Product Model
export const ProductModel = model<StationeryProduct>('Product', productSchema);
