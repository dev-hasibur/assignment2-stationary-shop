import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
// get all products
router.get('/', ProductControllers.getAllProducts);
// get all products
router.get('/:productId', ProductControllers.getSingleProduct);

export const ProductRoutes = router;
