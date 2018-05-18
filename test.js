process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./app/server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET offers', () => {
	it('it should GET all the offerss', (done) => {
		chai.request(server)
			.get('/getOffers')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
			    done();
			});
    });
});

describe('/GET Miami offers', () => {
	it('it should GET Miami hotel', (done) => {
		chai.request(server)
			.get('/getOffers?destinationName=Miami')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body[0].destination.shortName.should.be.eq('Miami');
			    done();
			});
    });
});