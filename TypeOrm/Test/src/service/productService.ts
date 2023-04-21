import {Product} from "../enitity/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let products = await this.productRepository.query('select product.* , category.name as name_category from product join category on product.category = category.id');
        return products
    }

    add = async (product) => {
        await this.productRepository.save(product);
    }
}

export default new ProductService();