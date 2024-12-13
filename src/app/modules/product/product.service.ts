import { ProductModel } from '../product.model';
import { StationeryProduct } from './product.interface';

// create single product
const createProductIntoDB = async (product: StationeryProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
