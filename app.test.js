const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST

    describe('CREATE request', () => {
    
        test('CREATE product test', async () => {
            const res = await request(app)
                                .post('/product/create')
                                .send({
                                    name : "test name", 
                                    description : "test desc",
                                    price : 0
                                });
            expect(res.statusCode).toBe(201);
        });
    
    
    });

//Unit test - to check whether the product builder displays the three object components of name, description and price (in this case a number (42))   

//describe('Unit Tests', () => {

    test('product object builder', () => {
        expect(build('a name', 'a description', 42)).toMatchObject({'name' : 'a name', 'description' : 'a description', price : 42});
    });
