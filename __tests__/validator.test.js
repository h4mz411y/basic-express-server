'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('API Server', () => {
    it('Ok!', async () => {
        const response = await request.get('/person?name=hamza');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('hamza');
    })
    
});