import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// create a new student
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    // will call service function to send this data
    const result = await ProductServices.createProductIntoDB(productData);
    // send response to user
    res.status(200).json({
      success: true,
      message: 'Product is created successfully.',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProduct,
};
