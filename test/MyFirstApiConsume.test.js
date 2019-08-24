const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
        console.log(response.body)
    });

    it('Consume GET Service with query parameters', async () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };

        const response = await agent.get('https://httpbin.org/get').query(query);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
    });

    it('Consume HEAD Service', async () => {
        const response = await agent.head('https://httpbin.org/ip');

        expect(response.status).to.equal(statusCode.OK);
        expect(response.header).to.have.property('content-type');
    });


    it('Consume PATCH Service', async () => {
        const change = {
            name: 'John',
            age: '32',
            city: 'Miami'
        };


        const response = await agent.patch('https://httpbin.org/patch').send(change);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(change);
       
    });

    it('Consume PUT Service', async () => {
        const change = {
            name: 'John',
            age: '32',
            city: 'Miami'
        };


        const response = await agent.patch('https://httpbin.org/patch').send(change);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(change);
       
    });

    it('Consume DELETE Service', async () => {
        const change = {
            name: 'John',
            age: '32',
            city: 'Miami'
        };


        const response = await agent.patch('https://httpbin.org/patch').send(change);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(change);
       
    });

});
