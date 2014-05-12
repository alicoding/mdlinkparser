mdlinkparser
============

[![Build Status](https://travis-ci.org/alicoding/mdlinkparser.svg?branch=master)](https://travis-ci.org/alicoding/mdlinkparser) [![npm-version](http://img.shields.io/npm/v/mdlinkparser.svg)](https://www.npmjs.org/package/mdlinkparser) [![Dependency Status](https://david-dm.org/alicoding/mdlinkparser.svg?theme=shields.io)](https://david-dm.org/alicoding/mdlinkparser) [![devDependency Status](https://david-dm.org/alicoding/mdlinkparser/dev-status.svg?theme=shields.io)](https://david-dm.org/alicoding/mdlinkparser#info=devDependencies)

##Markdown link parser

**Try it live** http://alicoding.github.io/mdlinkparser/

This parser will work in **node**, **browser** and **requirejs**

###Node.js

``` javascript
var parser = require("mdlinkparser").mdlinkparser;

var strings = parser("[some link](http://link.org)");

expected return

['http://link.org']
```

###Browser

``` html
<script src="path/to/lib/index.js"></script>

<script>console.log(window.mdlinkparser("[some link](http://link.org)"))</script>

expected return
['http://link.org']
```

###requirejs

``` javascript
requirejs.config({
  paths: {
    mdlinkparser: "path/to/lib/index"
  }
});

require(["mdlinkparser"], function() {
  console.log(mdlinkparser("[some link](http://link.org)")
});

expected return
['http://link.org']
```
