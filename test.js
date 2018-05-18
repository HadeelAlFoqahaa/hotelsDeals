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

describe('/GET Miami offer', () => {
	it('it should GET Miami hotel', (done) => {
		chai.request(server)
			.get('/getOffers?destinationName=Miami&lengthOfStay=1&minStarRating=3.5')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eq(1);
				res.body[0].destination.shortName.should.be.eq('Miami');
			    done();
			});
    });
});

describe('/GET length of stay 1 offer', () => {
	it('it should GET length of stay = 1 hotel', (done) => {
		chai.request(server)
			.get('/getOffers?lengthOfStay=1')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eq(3);
			    done();
			});
    });
});