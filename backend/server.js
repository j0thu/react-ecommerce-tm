import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
connectDB();

import products from './data/products.js';

import productRoutes from './routes/productRoutes.js';

//Middleware
import {notFound, errorHandler} from './middlewares/errorMiddleware.js';
const app = express();

app.get('/', (req, res)=>{
    res.send('API is running');
})

app.use('/api/products', productRoutes);
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold);
})  