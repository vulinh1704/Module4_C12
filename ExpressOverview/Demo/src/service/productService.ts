import {Product} from "../enitity/product";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find().populate('category', 'name');
        return products;
    }

    add = async (product) => {
       await Product.create(product);
    }
}

export default new ProductService();