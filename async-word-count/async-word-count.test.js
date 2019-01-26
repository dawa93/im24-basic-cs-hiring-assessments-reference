var path = require('path');
var should = require('chai').should();

var getTotalWordCount = require('./async-word-count');

describe('getTotalWordCount', function() {
  it('should eventually invoke the callback passed in', function(done) {
    var filePathOne = path.join(__dirname, 'files/fileOne.txt');
    var filePathTwo = path.join(__dirname, 'files/fileTwo.txt');

    getTotalWordCount(filePathOne, filePathTwo, function() {
      // If this asserion gets called, the callback was invoked correctly
      // Otherwise, this test will timeout
      should.exist(true);
      done();
    });
  });

  it('should invoke the callback with the combined word count as an argument', function(done) {
    var filePathOne = path.join(__dirname, 'files/fileOne.txt');
    var filePathTwo = path.join(__dirname, 'files/fileTwo.txt');

    getTotalWordCount(filePathOne, filePathTwo, function() {
      var callbackArguments = Array.prototype.slice.call(arguments);
      // File One has 79 words and File Two has 58 words
      callbackArguments.should.contain(137);
      done();
    });
  });

  it('should invoke the callback with the combined word count as the second argument', function(done) {
    var filePathOne = path.join(__dirname, 'files/fileOne.txt');
    var filePathTwo = path.join(__dirname, 'files/fileTwo.txt');

    getTotalWordCount(filePathOne, filePathTwo, function(err, wordCount) {
      // File One has 79 words and File Two has 58 words
      wordCount.should.equal(137);
      should.not.exist(err);
      done();
    });
  });

  it('should invoke the callback with an error in filePathOne as the first argument', function(done) {
    var filePathOne = path.join(__dirname, 'files/nonExistentFileOne.txt');
    var filePathTwo = path.join(__dirname, 'files/fileTwo.txt');

    getTotalWordCount(filePathOne, filePathTwo, function(err, wordCount) {
      err.code.should.equal('ENOENT');
      should.not.exist(wordCount);
      done();
    });
  });

  it('should invoke the callback with an error in filePathTwo as the first argument', function(done) {
    var filePathOne = path.join(__dirname, 'files/fileOne.txt');
    var filePathTwo = path.join(__dirname, 'files/nonExistentFileTwo.txt');

    getTotalWordCount(filePathOne, filePathTwo, function(err, wordCount) {
      err.code.should.equal('ENOENT');
      should.not.exist(wordCount);
      done();
    });
  });
});
