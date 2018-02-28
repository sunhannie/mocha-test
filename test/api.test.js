let expect = require("chai").expect;
let request = require('supertest');

describe("api", () => {
  it('get baidu information?', function (done) {
    request('https://www.baidu.com')
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function (err, res) {
        expect(res).to.be.an('object');
        done();
      });
  })
})


var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

it('double done', function(done) {
  // Calling `done()` twice is an error
  setImmediate(done);
  setImmediate(done);
});