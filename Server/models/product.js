const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    productId: String,
    prouctName: String,
    Price: [String],
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    orderId:{type:mongoose.Schema.Types.ObjectId,ref:'order'}
});


const Product = mongoose.model("Product", productSchema);


async function createProduct(userId, orderId, productId, productName, Price) {
    const newProduct = await Product.create({
        userId: userId,
        orderId: orderId ,
        productId: productId,
        productName: productName,
        Price: Price,
    });
    return newProduct;
}

//Gets all products
async function getAllProducts() {
    const database = client.db('test');
    const collection = database.collection('products');
    const orders = await collection.find().toArray()
    console.log(products);
    return products;
}


async function getProduct(userId,productId) {
    return await Product.findOne({ "productId": productId,"userId":userId });
}


async function updateProduct(userId,id, updatedFields) {
    const product = await Product.updateOne({ "_id": id,"userId": userId }, { $set: updatedFields });
    return product;
}


async function deleteProduct(userId,id) {
    await Product.deleteOne({ "_id": id,"userId": userId });
}


module.exports = { createProduct, getProduct, updateProduct, deleteProduct,getAllProducts };