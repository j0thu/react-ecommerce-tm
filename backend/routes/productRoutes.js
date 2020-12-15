import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

//@desc    Fetch All Products
//@route   GET /api/products
//@access  Public
router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc    Fetch One Products
//@route   GET /api/products/:id
//@access  Public
router.get( "/:id", asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(`Product Not Found`); //Handled by errorHandler middleware
    }
  })
);

export default router;
