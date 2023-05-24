const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const {token,id,userOne}=require('./fixtures/db');
console.log(token,"%%%%%%%%")
test('should craete a task',async()=>{
console.log(userOne.email)
console.log('task testcase run')

    const user=await User.findOne({email:userOne.email});
    console.log(user)
    await request(app)
    .post('/tasks')
    .set('authorization',`Bearer ${user.tokens[0].token}`)
    .send({
        "description":"this is node js course aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    })
    .expect(201)
})