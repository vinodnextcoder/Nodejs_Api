//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block

describe('/GET book', () => {
  it('it should GET all the users', (done) => {
    chai.request(server)
      .get('/api/usersData')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        console.log(res.body)
        done();
      });
  });
});