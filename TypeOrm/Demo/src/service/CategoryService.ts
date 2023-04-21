import {Category} from "../entity/category";
import {AppDataSource} from "../data-source";

class CategoryService {
    private categoryRepository;
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getAll = async () => {
        let products = await this.categoryRepository.find()
        return products;
    }

}

export default new CategoryService();