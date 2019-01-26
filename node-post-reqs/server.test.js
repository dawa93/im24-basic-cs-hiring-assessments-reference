var expect = require('chai').expect;
var request = require('request');

describe('', function() {

  it('POST /hifive request should return hifive.jpg', function(done) {
    var options = {
      'method': 'POST',
      'uri': 'http://127.0.0.1:4568/hifive'
    };

    request(options, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-length']).to.equal('7154');
      done();
    });
  });


  it('POST /lowfive request should return lowfive.jpg', function(done) {

    var options = {
      'method': 'POST',
      'uri': 'http://127.0.0.1:4568/lowfive'
    };

    request(options, function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-length']).to.equal('3640169');
      done();
    });
  });

});
