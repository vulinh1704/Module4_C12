import {Router} from "express";
import productController from "../controller/productController";

const router = Router();
router.get('/home', productController.findAll);
router.get('/products/add', productController.showFormAdd)
router.post('/products/add', productController.addProduct)
export default router;