"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await product_1.Product.find();
            console.log(products);
            return products;
        };
        this.add = async (product) => {
            await product_1.Product.create(product);
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map