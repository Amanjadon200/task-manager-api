const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const id = new mongoose.Types.ObjectId();
const token = jwt.sign({ _id: id.toString() }, 'thisismynewcourse');
const userOne = {
    name: "ana",
    email: "abcdefg@gmail.com",
    password: "121212112222234",
    age: 23,
    _id: id,
    tokens: [{
        token
    }]
};
beforeEach(async () => {
    console.log('before called');
    await User.deleteMany({});
    await new User(userOne).save();
    // await user.save()
});
test('should create an user', async () => {
    const data = await request(app)
        .post('/users').send({
            name: "aman jadon",
            email: "abc@gnfkd.com",
            password: "1212128887"
        });
    expect(data.statusCode).toBe(201);
});
test('should do login', async () => {
    await request(app).post('/users/login').send({ email: userOne.email, password: userOne.password }).expect(200);
});

// test('get my profile',async()=>{
//     await request(app)
//     .get('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send()
//     .expect(200)
// })
// test('shoud delete the account',async()=>{
//     await request(app)
//     .delete('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send()
//     .expect(200)
// })
test('should not delete the account for not authorized person', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401);
});