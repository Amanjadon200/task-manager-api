const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOne } = require('./fixtures/db');
test('should craete a task', async () => {
    const user = await User.findOne({ email: userOne.email });
    console.log(user.tokens[0].token,"((((")
    await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${user.tokens[0].token}`)
        .send({
            "description": "this is node js course that's needs to be completed by 28/05/2023"
        })
        .expect(201);
});