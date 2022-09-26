// Generated by CoffeeScript 1.12.7
(function() {
  var Command;

  Command = require('../lib/command');

  describe("Command", function() {
    return describe("::spawn", function() {
      return it("only calls the callback once if the spawned program fails", function() {
        var callbackCount, child, command, exited;
        exited = false;
        callbackCount = 0;
        command = new Command;
        child = command.spawn("thisisafakecommand", [], function() {
          return callbackCount++;
        });
        child.once("close", function() {
          return exited = true;
        });
        waitsFor(function() {
          return exited;
        });
        return runs(function() {
          return expect(callbackCount).toEqual(1);
        });
      });
    });
  });

}).call(this);
