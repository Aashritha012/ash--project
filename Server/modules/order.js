const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    orderId: [String],
    ordername: String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});


const item = mongoose.model("item", itemSchema);


async function createItem(userId,itemId,itemname) {
    const newitem = await Book.create({
        userId:userId,
        itemId:itemId,
        itemname:itemname
    });
    return newitem;
}


async function getitem(userId,itemId) {
    return await item.findOne({ "itemId": itemId,"userId":userId });
}


async function updateitem(userId,id, updatedFields) {
    const item = await item.updateOne({ "_id": id,"userId": userId }, { $set: updatedFields });
    return item;
}


async function deleteitem(userId,id) {
    await item.deleteOne({ "_id": id,"userId": userId });
}


module.exports = { createItem, getitem, updateitem, deleteitem };