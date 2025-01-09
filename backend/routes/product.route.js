import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
    } catch (e) {
        console.error("Error while fetching products", e.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
})

router.post("/", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (e) {
        console.error("Error while creating product", e.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }

});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        return res.status(200).json({ success: true, data: updatedProduct });
    } catch (e) {
        console.error("Error while updating product", e.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (e) {
        console.error("Error while deleting product", e.message);
        return res.status(404).json({ success: false, message: "Product not found" });
    }

});

export default router;