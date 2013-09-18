/// <reference lib='asyncblock.d.ts' />
/// <reference lib='node.d.ts' />
/// <reference lib='overrides.d.ts' />

import asyncblock = require('asyncblock');
import fs = require('fs');

export function execute() {
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
}
