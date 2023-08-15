const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const {setUpDb }= require('./fixtures/db');
beforeEach(async () => {
    await User.deleteMany();
    setUpDb()
});
test('hi aman',async()=>{
    
})
// test('should create an user', async () => {
//     await request(app)
//         .post('/users').send({
//             name: userOne.name,
//             email: userOne.email,
//             password: userOne.password,
//             age: userOne.age,
//         })
//         .expect(201);
//         console.log('user testcase run')
// });
// test('should do login', async () => {
//     const response = await request(app)
//         .post('/users/login')
//         .send({ email: userOne.email, password: userOne.password })
//         .expect(200);
//     // console.log(response.body);
//     const user=await User.findById(response.body.user._id);
//     const getToken = response.body.token;
//     const resToken=user.tokens.find((token)=>{return token.token===getToken})
//     // console.log(isFind)
//     expect(resToken.token).toBe(getToken);
// });

// test('get my profile',async()=>{
//     await request(app)
//     .get('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send()
//     .expect(200)
// })
// test('shoud delete the account',async()=>{
//     const response=await request(app)
//     .delete('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send()
//     .expect(200)
//     const user=await User.findById(id);
//     expect(user).toBeNull()
// })
// test('should not delete the account for not authorized person', async () => {
//     await request(app)
//         .delete('/users/me')
//         .send()
//         .expect(401);
// });

// test('should save an avatar to a profile',async()=>{
//     const res=await request(app)
//     .post('/users/me/avatar')
//     .set('authorization',`Bearer ${token}`)
//     .attach('avatar','./test/fixtures/abc.png')
//     .expect(200)
//     const user=await User.findById(id);
//     expect(user.avatar).toEqual(expect.any(Buffer))
// })
// test('should update users field',async()=>{
//     await request(app)
//     .patch('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send({
//         name:'aman'
//     })
//     .expect(200)
//     const user=await User.findById(id);
//     expect(user.name).toBe('aman')
// })
// test('should not update users field',async()=>{
//     await request(app)
//     .patch('/users/me')
//     .set('authorization',`Bearer ${token}`)
//     .send({
//         location:'mathura'
//     })
//     .expect(400)
// })