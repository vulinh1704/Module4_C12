"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: String
});
const Category = (0, mongoose_1.model)('Category', CategorySchema);
exports.Category = Category;
//# sourceMappingURL=cagteogry.js.map