// Generated by CoffeeScript 1.12.7
(function() {
  var apm;

  apm = require('../lib/apm-cli');

  describe('command help', function() {
    beforeEach(function() {
      spyOnToken();
      return silenceOutput();
    });
    describe("apm help publish", function() {
      return it("displays the help for the command", function() {
        var callback;
        callback = jasmine.createSpy('callback');
        apm.run(['help', 'publish'], callback);
        waitsFor('waiting for help to complete', 60000, function() {
          return callback.callCount === 1;
        });
        return runs(function() {
          expect(console.error.callCount).toBeGreaterThan(0);
          return expect(callback.mostRecentCall.args[0]).toBeUndefined();
        });
      });
    });
    describe("apm publish -h", function() {
      return it("displays the help for the command", function() {
        var callback;
        callback = jasmine.createSpy('callback');
        apm.run(['publish', '-h'], callback);
        waitsFor('waiting for help to complete', 60000, function() {
          return callback.callCount === 1;
        });
        return runs(function() {
          expect(console.error.callCount).toBeGreaterThan(0);
          return expect(callback.mostRecentCall.args[0]).toBeUndefined();
        });
      });
    });
    describe("apm help", function() {
      return it("displays the help for apm", function() {
        var callback;
        callback = jasmine.createSpy('callback');
        apm.run(['help'], callback);
        waitsFor('waiting for help to complete', 60000, function() {
          return callback.callCount === 1;
        });
        return runs(function() {
          expect(console.error.callCount).toBeGreaterThan(0);
          return expect(callback.mostRecentCall.args[0]).toBeUndefined();
        });
      });
    });
    return describe("apm", function() {
      return it("displays the help for apm", function() {
        var callback;
        callback = jasmine.createSpy('callback');
        apm.run([], callback);
        waitsFor('waiting for help to complete', 60000, function() {
          return callback.callCount === 1;
        });
        return runs(function() {
          expect(console.error.callCount).toBeGreaterThan(0);
          return expect(callback.mostRecentCall.args[0]).toBeUndefined();
        });
      });
    });
  });

}).call(this);
