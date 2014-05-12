#!/usr/bin/env node
var parser = require("../lib").mdlinkparser;
var args = process.argv.slice(2);
var string = args[0];
var path = require("path");
var fs = require("fs");

function isPathToFile(string) {
  if(fs.existsSync(string)) {
    var stat = fs.statSync(path.join(string));
    if(!stat.isDirectory()) {
      return fs.readFileSync(string, 'utf8');
    } else {
      process.exit(1);
    }
  }
  return string;
}
var strings = isPathToFile(string);
var parsedStrings = parser(strings);

if(parsedStrings.length < 1) {
  console.log("You either didn't pass a correct file path or the given string does not contain a valid Markdown link\n",
               "Please see Markdown DOCS for more details http://daringfireball.net/projects/markdown/syntax#link");
  process.exit(0);
}
console.log(parser(strings));
