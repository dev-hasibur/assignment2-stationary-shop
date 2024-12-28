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
// get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
