(function(global) {
  parser = function (strings) {
    var keys = [];
    strings.replace(/]\(([^)]+)\)/g, function(wholeMatch, key) {
      keys.push(key);
      return wholeMatch;
    });
    return keys;
  };

  global.mdlinkparser = parser;

}(this));