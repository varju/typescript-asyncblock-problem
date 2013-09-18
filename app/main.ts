/// <reference lib='asyncblock.d.ts' />
/// <reference lib='node.d.ts' />
/// <reference lib='overrides.d.ts' />

import asyncblock = require('asyncblock');
asyncblock.enableTransform();

import externalSample = require('external_sample');
externalSample.execute();
