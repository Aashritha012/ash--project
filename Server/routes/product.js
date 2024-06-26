const express = require("express");
const Product = require('../models/product'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { UserId, orderId, productId, productName, Price} = req.body;
        const newProduct = await Product.create({ UserId, orderId, productId, productName, Price });
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.query.productId });
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { UserId, ...updatedFields } = req.body;
        const product = await Product.updateOne({ _UserId: UserId }, { $set: updatedFields });
        if (product.nModified === 0) {
            return res.status(404).send({ message: "Product not found or no changes made" });
        }
        res.send({ message: "Product updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { UserId } = req.body;
        const product = await Product.deleteOne({ _UserId: UserId });
        if (product.deletedCount === 0) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;