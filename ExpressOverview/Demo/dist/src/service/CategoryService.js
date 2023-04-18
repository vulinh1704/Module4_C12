"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cagteogry_1 = require("../enitity/cagteogry");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let products = await cagteogry_1.Category.find();
            return products;
        };
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=CategoryService.js.map