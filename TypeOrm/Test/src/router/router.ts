import {Router} from "express";
import userController from "../controller/userController";
import productRouter from "./productRouter";

const router = Router();
router.use('/products', productRouter);

router.get('/users/login', userController.showFormLogin);
router.post('/users/login', userController.login);

export default router;