const User = require('../../src/models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const id = new mongoose.Types.ObjectId();
const token = jwt.sign({ _id: id.toString() }, 'thisismynewcourse');

const userOne = {
    name: "ana",
    email: "abcdefg@gmail.com",
    password: "121212112222234",
    age: 22,
};
const setUpDb=async()=>{
    // await User.deleteMany({});
    console.log(token,"%%%%%%%%")
    // await new User(userOne).save();
}
module.exports={
    userOne,
    token,
    id,
    setUpDb
}