const mongoose = require("mongoose");

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name: String,
    username: String,
    password: String,
    email: String,
    followers:[String],
    following:[String]


})

const User = mongoose.model("User",userSchema);
//Register & Create
async function register(username,password)
{
    const user = getUser(username);
    if(user) throw Error('Username already Exists');

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password,salt);

    const newUser = await User.create({
        username: username,
        password: hashed
    });

    return newUser
}
//Login & Read
async function login(username,password)
{
    const user = await User.findOne({"username":username});
    if(!user) throw Error('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw Error('Incorrect Password');

    return user;
}

//Update

async function updatePassword(id,password)
{
    const user = await User.updateOne({"_id":id},{$set:{password:password}})
    return user;
}

//Delete

async function deleteUser(id)
{
    await user.deleteOne({"_id":id});
};

async function getUser(username)
{
    return await User.findOne({"username":username});
}

//Export

module.exports ={register,login,updatePassword,deleteUser};