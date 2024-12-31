import { ProductModel } from '../product.model';
import { StationeryProduct } from './product.interface';
import { ObjectId } from 'mongodb';

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
  // const result = await ProductModel.findById(id);
  const productId = new ObjectId(id);
  const result = await ProductModel.aggregate([{ $match: { _id: productId } }]);
  return result;
};
// update product
const updateProduct = async (id: string, data: StationeryProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete single product
const deleteSingleProductFromDB = async (id: string) => {
  // const result = await ProductModel.findById(id);
  const result = await ProductModel.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProduct,
  deleteSingleProductFromDB,
};
