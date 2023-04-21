import {Product} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Like} from "typeorm";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
    }

    getAll = async () => {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            },
            where: {
                category: {
                    name: Like('%n%')
                }
            }
        });
        console.log(products)
        return products;
    }

    add = async (product) => {
       await this.productRepository.save(product)
    }
}

export default new ProductService();