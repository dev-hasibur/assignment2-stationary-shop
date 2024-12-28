import { ProductModel } from '../product.model';
import { StationeryProduct } from './product.interface';

// create single product
const createProductIntoDB = async (product: StationeryProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
// get all products
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB
};
