/// <reference lib='asyncblock.d.ts' />
/// <reference lib='node.d.ts' />
/// <reference lib='overrides.d.ts' />

import asyncblock = require('asyncblock');
import fs = require('fs');
import internalLib = require('internal_lib');

export function execute() {
  /*
   * calling a function from node's built in library
   */

  // normal way, using explicit callback method
  var filename = __dirname + '/main.ts';
  fs.readFile(filename, (err, data) => {
    console.log("callback read data:\n" + data);
  });

  // asyncblock way, with rewrites
  asyncblock(() => {
    var data = fs.readFile(filename).sync();
    console.log("asyncblock read data:\n" + data);
  });

  /*
   * calling a function we defined ourselves
   */

  internalLib.foo((err, result) => {
    console.log("callback result: " + result);
  });

  asyncblock(() => {
    var result = internalLib.foo().sync();
    console.log("asyncblock result: " + result);
  });
}
