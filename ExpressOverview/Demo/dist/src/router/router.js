"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const productRouter_1 = __importDefault(require("./productRouter"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.get('/users/login', userController_1.default.showFormLogin);
router.post('/users/login', userController_1.default.login);
exports.default = router;
//# sourceMappingURL=router.js.map