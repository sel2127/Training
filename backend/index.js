import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import path from 'path';


const app = express();
const PORT = 5000;


// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// serve uploaded images
app.use('/uploads', express.static(path.resolve('uploads')));


app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});