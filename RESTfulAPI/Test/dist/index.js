"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./src/router/router"));
const data_source_1 = require("./src/data-source");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect Database Success');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/home/:id', function (req, res, next) {
    if (req.params.id === '1') {
        req.name = 'Hùng';
        return next();
    }
    else {
        res.status(403).json('Bạn không có quyền');
    }
}, function (req, res, next) {
    res.json('Hello ' + req.name);
});
app.use('/home2', function (req, res) {
    console.log(req.name);
    res.json(req.name);
});
app.use('', router_1.default);
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map