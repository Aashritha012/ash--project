const express = require("express");
const Book = require('../models/order'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { itemId,itemname } = req.body;
        const newItem = await Book.create({ itemId,itemname });
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const item = await item.findOne({ title: req.query.title });
        if (!item) {
            return res.status(404).send({ item: "Book not found" });
        }
        res.send(item);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { id, ...updatedFields } = req.body;
        const item = await item.updateOne({ _id: id }, { $set: updatedFields });
        if (item.nModified === 0) {
            return res.status(404).send({ message: "item not found or no changes made" });
        }
        res.send({ message: "item updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const book = await Book.deleteOne({ _id: id });
        if (book.deletedCount === 0) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.send({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;