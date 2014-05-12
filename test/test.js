var parser = require("../lib").mdlinkparser;
var should = require("should");
var lorem = require("../lorem");
var expected = lorem.expected;
var strings = lorem.strings;
var exec = require('child_process').exec,
    child;

describe('Test Parser', function(){
  it("Return value should be an instanceof Array", function () {
    should(function () {
      parser(strings).should.be.instanceof(Array);
    }).not.throw();
  });
  it("Return value have length of 4", function () {
    should(function () {
      parser(strings).should.be.instanceof(Array).and.have.lengthOf(5);
    }).not.throw();
  });
  it("Return value should match the given array", function () {
    should(function () {
      parser(strings).should.be.instanceof(Array).and.eql(expected);
    }).not.throw();
  });
  it("Should not throw if given an empty string", function () {
    should(function () {
      parser("").should.be.instanceof(Array).and.eql([]);
    }).not.throw();
  });
  it("Should return an empty array if no link found", function () {
    should(function () {
      parser("not empty but no link").should.be.instanceof(Array).and.eql([]);
    }).not.throw();
  });
});

describe('Test command line tool for mdlinkparser', function() {
  it('Should return expected array if given correct file path with strings', function(done) {
    should(function () {
      child = exec('node ./bin/index.js lorem.json',
        function (error, stdout, stderr) {
          stdout.should.be.eql("[ 'http://imgur.com/',\n  'http://gifctrl.com/',\n  'http://html9responsiveboilerstrapjs.com/',\n  'http://seenly.com/',\n  'http://zeus.ugent.be/' ]\n");
          if (error !== null) {
            console.log('exec error: ' + error);
          }
          done();
      });
    }).not.throw();
  });
  it('Should return [ \'http://senecac.on.ca\' ]\\n if execute node ./bin/index.js "[http://blahblah.com](http://senecac.on.ca)"', function(done) {
    should(function () {
      child = exec('node ./bin/index.js "[http://blahblah.com](http://senecac.on.ca)"',
        function (error, stdout, stderr) {
          stdout.should.be.eql("[ 'http://senecac.on.ca' ]\n");
          if (error !== null) {
            console.log('exec error: ' + error);
          }
          done();
      });
    }).not.throw();
  });

  it('Should return information about markdown link if call with non existing file path', function(done) {
    should(function () {
      child = exec('node ./bin/index.js loren.json',
        function (error, stdout, stderr) {
          stdout.should.be.eql("You either didn't pass a correct file path or the given string does not contain a valid Markdown link\n Please see Markdown DOCS for more details http://daringfireball.net/projects/markdown/syntax#link\n");
          if (error !== null) {
            console.log('exec error: ' + error);
          }
          done();
      });
    }).not.throw();
  });
  it('Should return information about markdown link if call with an invalid Markdown link format', function(done) {
    should(function () {
      child = exec('node ./bin/index.js "(link)[iswrong]"',
        function (error, stdout, stderr) {
          stdout.should.be.eql("You either didn't pass a correct file path or the given string does not contain a valid Markdown link\n Please see Markdown DOCS for more details http://daringfireball.net/projects/markdown/syntax#link\n");
          if (error !== null) {
            console.log('exec error: ' + error);
          }
          done();
      });
    }).not.throw();
  });
});