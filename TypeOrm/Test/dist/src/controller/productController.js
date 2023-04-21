"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            if (req.session['user']) {
                let user = req.session['user'];
                let idUser = user._id;
                let listProduct = await this.productService.getAll();
                res.render('index', { products: listProduct });
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showFormAdd = async (req, res) => {
            let listCategory = await this.categoryService.getAll();
            res.render('products/create', { categories: listCategory });
        };
        this.addProduct = (req, res) => {
            this.productService.add(req.body);
            res.redirect(301, '/products');
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map