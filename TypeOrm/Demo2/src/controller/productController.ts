import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/CategoryService";

class ProductController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        if(req.session['user']) {
            let user = req.session['user'];
            let idUser = user._id;
            let listProduct = await this.productService.getAll();
            res.render('index', {products: listProduct});
        } else {
            res.redirect(301, '/users/login');
        }
    }

    showFormAdd = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAll();
        res.render('products/create', {categories: listCategory})
    }

    addProduct = (req: Request, res: Response) => {
        console.log(req.body)
        this.productService.add(req.body);
        res.redirect(301, '/products')
    }
}

export default new ProductController();