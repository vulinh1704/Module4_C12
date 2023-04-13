"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Server is running');
});
app.get('/hello', (req, res) => {
    res.render('index', { name: 'mono sang' });
});
app.get('/student/:id', (req, res) => {
    res.send('Đây là student thứ ' + req.params.id);
});
app.post('/hello', (req, res) => {
    console.log(req.body);
});
//# sourceMappingURL=index.js.map