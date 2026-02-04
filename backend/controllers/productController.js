import { createProduct, getAllProducts } from '../models/productModel.js';


export const addProduct = (req, res) => {
const { name, price, description } = req.body;
const image = req.file ? req.file.filename : null;


if (!name || !price || !description || !image) {
return res.status(400).json({ message: 'All fields are required' });
}


const product = { name, price, description, image };


createProduct(product, (err, result) => {
if (err) {
return res.status(500).json({ message: 'DB Error', error: err });
}
res.status(201).json({ message: 'Product created successfully' });
});
};


export const getProducts = (req, res) => {
getAllProducts((err, results) => {
if (err) {
return res.status(500).json({ message: 'DB Error', error: err });
}
res.json(results);
});
};