import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.edit);
productRouter.delete('/:id', productController.remove);
export default productRouter;