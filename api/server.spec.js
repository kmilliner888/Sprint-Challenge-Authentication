const request = require('supertest');

const server = require('./server.js');

describe('server.js', ()=> {
    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('index', () => {
        it('should return a 200 status', async () => {
            expected = 200;
            const response = await request(server).get('/');

            expect(response.status).toEqual(expected);
        })

        it('should return json object', async () => {
            expected = { api: "up and running!"};
            const response = await request(server).get('/');

            expect(response.body).toEqual(expected);
        })

    })
    
    describe('register', () => {
        it('should return a 201', async () => {
            expected = 201;
            const response = await request(server).post('/register');

            expect(response.status).toEqual(expected);
        })
        it('should return a json object', async () => {
            expected = {"user": {}};
            const response = await request(server).post('/register');

            expect(response.body).toEqual(expected);
        })
    })

    describe('login', () => {
        it('should return a 200', async () => {
            expected = 200;
            const response = await request(server).post('/login');

            expect(response.status).toEqual(expected);
        })
        it('should return a json object', async () => {
            expected = {"user": {}};
            const response = await request(server).post('/login');

            expect(response.body).toEqual(expected);
        })
    })
})