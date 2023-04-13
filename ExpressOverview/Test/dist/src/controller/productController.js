"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let products = await this.productService.findAll();
            res.render('index', { listProduct: products });
        };
        this.showFormAdd = async (req, res) => {
            res.render('products/add');
        };
        this.addProduct = (req, res) => {
            console.log(req.body);
            this.productService.save(req.body);
            res.redirect(301, '/home');
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map