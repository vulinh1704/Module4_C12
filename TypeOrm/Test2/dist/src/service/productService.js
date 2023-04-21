"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                }, where: {
                    category: {
                        name: (0, typeorm_1.ILike)("%B%")
                    },
                },
            });
            return products;
        };
        this.add = async (product) => {
            console.log(product);
            await this.productRepository.save(product);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map