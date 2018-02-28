let expect = require("chai").expect;
let request = require('supertest');
const assert = require('assert');
const should = require('should');

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


// var assert = require('assert');
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
  // setImmediate(done);
});

// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });

// beforeEach(function() {
//   return db.clear()
//     .then(function() {
//       return db.save([tobi, loki, jane]);
//     });
// });

// describe('#find()', function() {
//   it('respond with matching records', function() {
//     return db.find({ type: 'User' }).should.eventually.have.length(3);
//   });
// });


describe('Array', () => {
  describe('#indexOf()',() => {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  this.slow(10000);
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

