import { Router  } from 'express';
import { getAllProductsContoller, createProductController, getProductByIdController, updateProductController, deleteProductController } from './products.controller';


const router = Router();

router.get('/', getAllProductsContoller);
router.post('/', createProductController);
router.get('/:id', getProductByIdController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;
