import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.get('/create', productController.showFormAdd);
productRouter.post('/create', productController.addProduct);
export default productRouter;