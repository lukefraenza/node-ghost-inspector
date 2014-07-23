(function() {
  var GhostInspector, should;

  should = require('should');

  GhostInspector = require('../index')('53cf58be350c6c41029a11bd', 'ff586dcaaa9b781163dbae48a230ea1947f894ff');

  describe('Get suites', function() {
    this.timeout(0);
    return it('should return 1 suite', function(done) {
      return GhostInspector.getSuites(function(err, data) {
        data.length.should.equal(1);
        return done();
      });
    });
  });

  describe('Get suite', function() {
    this.timeout(0);
    return it('should return a suite named "Test Suite"', function(done) {
      return GhostInspector.getSuite('53cf58c0350c6c41029a11be', function(err, data) {
        data.name.should.equal("Test Suite");
        return done();
      });
    });
  });

  describe('Get suite tests', function() {
    this.timeout(0);
    return it('should return 2 tests in the suite', function(done) {
      return GhostInspector.getSuiteTests('53cf58c0350c6c41029a11be', function(err, data) {
        data.length.should.equal(2);
        return done();
      });
    });
  });

  describe('Execute suite ', function() {
    this.timeout(0);
    return it('should return 2 results and a passing status', function(done) {
      return GhostInspector.executeSuite('53cf58c0350c6c41029a11be', function(err, data, passing) {
        data.length.should.equal(2);
        passing.should.equal(true);
        return done();
      });
    });
  });

  describe('Get tests', function() {
    this.timeout(0);
    return it('should return 2 tests', function(done) {
      return GhostInspector.getTests(function(err, data) {
        data.length.should.equal(2);
        return done();
      });
    });
  });

  describe('Get test', function() {
    this.timeout(0);
    return it('should return a test named "Google"', function(done) {
      return GhostInspector.getTest('53cf58fc350c6c41029a11bf', function(err, data) {
        data.name.should.equal("Google");
        return done();
      });
    });
  });

  describe('Get test results', function() {
    this.timeout(0);
    return it('should return at least 1 result with a start URL of "https://www.google.com"', function(done) {
      return GhostInspector.getTestResults('53cf58fc350c6c41029a11bf', function(err, data) {
        data[0].startUrl.should.equal("https://www.google.com");
        return done();
      });
    });
  });

  describe('Execute test ', function() {
    this.timeout(0);
    return it('should return a test name of "Google" and a passing status', function(done) {
      return GhostInspector.executeTest('53cf58fc350c6c41029a11bf', function(err, data, passing) {
        data.testName.should.equal("Google");
        passing.should.equal(true);
        return done();
      });
    });
  });

  describe('Get result ', function() {
    this.timeout(0);
    return it('should return a result with a start URL of "https://www.google.com"', function(done) {
      return GhostInspector.getResult('53cf58fe8e871daa3d95c6c5', function(err, data) {
        data.startUrl.should.equal("https://www.google.com");
        return done();
      });
    });
  });

}).call(this);