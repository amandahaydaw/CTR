const { Logger } = require('mongodb');
const supertest = require('supertest');
const config = require('../config/host.json');
const request = supertest(config.host);
describe('User Model Test for ALL feature file', () => {

    it('passing test', () => {
        expect(true).toBeTruthy();
    })

    it('failing test', () => {
            expect(false).toBeFalsy();
        })
        // it('Test1 : Test API /api/UserLogin with (POST) method', (done) => {
        //     return request
        //         .post('/api/UserLogin')
        //         .send({ username: 'amandaf', password: 'amandaf' })
        //         .expect(200)
        //         .then((res) => {
        //             const info = res.body;
        //             //get token and saved in loginToken
        //             loginToken = info.token
        //             expect(info.success).toBe(true)
        //             done();
        //         });
        // });


})
