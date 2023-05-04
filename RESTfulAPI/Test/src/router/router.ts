import {Router} from "express";
import productRouter from "./productRouter";
import userController from "../controller/userController";
import {userRouter} from "./userRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/auth', userRouter);
export default router;