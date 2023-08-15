const User = require('../../src/models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const id1 = new mongoose.Types.ObjectId();
const id2 = new mongoose.Types.ObjectId();
const id3 = new mongoose.Types.ObjectId();
const token1 = jwt.sign({ _id: id1.toString() }, 'thisismynewcourse');
const token2 = jwt.sign({ _id: id2.toString() }, 'thisismynewcourse');
const token3 = jwt.sign({ _id: id3.toString() }, 'thisismynewcourse');

const userOne = {
    _id: id1,
    name: "ana",
    email: "abcdefg@gmail.com",
    password: "121212112222234",
    age: 22,
    tokens: [
        { token: token1 }
    ]
};
const userTwo = {
    _id: id2,
    name: "namqam",
    email: "aaaaaaaaefg@gmail.com",
    password: "121212112222234",
    age: 22,
    tokens: [
        { token: token2 }
    ]
};
const userThree = {
    _id: id3,
    name: "akjl",
    email: "qqqqqqqdefg@gmail.com",
    password: "121212112222234",
    age: 22,
    tokens: [
        { token: token3 }
    ]
};
async function setUpDb() {
    const user = new User(userOne);
    await user.save();
    await new User(userTwo).save();
    await new User(userThree).save();
};
module.exports = {
    setUpDb,
    userOne
};