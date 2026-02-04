import express from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';
import upload from '../middlewares/upload.js';


const router = express.Router();


router.post('/', upload.single('image'), addProduct);
router.get('/', getProducts);


export default router;