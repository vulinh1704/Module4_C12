"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.query('select product.*, category.name as \'name_category\' from product join category on product.category = category.id;');
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map