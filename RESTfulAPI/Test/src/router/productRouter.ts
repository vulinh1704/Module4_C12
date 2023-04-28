import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();

function auth(req, res, next) {
    if (req.query.role === 'admin' && req.query.name === 'linh') {
        return next()
    } else {
        res.json('Không có quyền')
    }
}

productRouter.get('/', productController.findAll);
productRouter.use(auth);
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.edit);
productRouter.delete('/:id', productController.remove);
export default productRouter;