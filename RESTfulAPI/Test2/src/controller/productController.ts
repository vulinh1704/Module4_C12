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
        let listProduct = await this.productService.getAll();
        res.status(200).json(listProduct)
    }


    addProduct = async (req: Request, res: Response) => {
        await this.productService.add(req.body);
        if (!req.body.name) {
            res.status(400).json({
                message: 'name missing'
            })
            res.end();
        } else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    edit = (req: Request, res: Response) => {
        let id = req.params.id;
        let productEdit = req.body;
        console.log(id, productEdit)
        res.status(200).json({
            message: 'Edit success'
        })
    }

    remove = (req: Request, res: Response) => {
        let id = req.params.id;
        res.status(200).json({
            message: 'Delete success'
        })
    }
}

export default new ProductController();