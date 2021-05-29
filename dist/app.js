"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./product");
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json()); //adding a piece of middleware
const products = [
    { id: 1, title: 'bat' },
    { id: 2, title: 'badminton' },
    { id: 3, title: 'ball', },
];
app.get('/', (req, res) => {
    res.send(ptoclient);
});
let ptoclient = getProducts();
app.get('/api/product', (req, res) => {
    res.send(products);
});
app.get('/api/product/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product)
        res.status(404).send('The product not found'); //404
    res.send(product);
});
//while using database this would be done with it
app.post('api/products', (req, res) => {
    const product = {
        id: products.length + 1,
        title: req.body.title,
    };
    products.push(product);
    res.send(product);
});
function getProducts() {
    let p = new product_1.Product();
    p.Id = "p1";
    p.Price = 200;
    p.Title = "Bat";
    return p;
}
app.listen(port, () => {
    console.log('server is running on 3000');
});
//# sourceMappingURL=app.js.map