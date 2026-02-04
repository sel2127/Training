import db from '../config/db.js';


export const createProduct = (product, callback) => {
const sql = `INSERT INTO products (name, price, description, image)
VALUES (?, ?, ?, ?)`;
const values = [product.name, product.price, product.description, product.image];


db.query(sql, values, callback);
};


export const getAllProducts = (callback) => {
const sql = 'SELECT * FROM products';
db.query(sql, callback);
};