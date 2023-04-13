import {Request, Response} from "express";
import productService from "../service/productService";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService
    }

    findAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll()
        res.render('index', {listProduct: products});
    }

    showFormAdd = async (req: Request, res: Response) => {
        res.render('products/add')
    }

    addProduct = (req: Request, res : Response) => {
        console.log(req.body)
        this.productService.save(req.body);
        res.redirect(301, '/home')
    }
}

export default new ProductController();