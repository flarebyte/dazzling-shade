#!/usr/bin/env node
'use strict';
var meow = require('meow');
var dazzlingShade = require('./');

var cli = meow({
  help: [
    'Usage',
    '  dazzling-shade <input>',
    '',
    'Example',
    '  dazzling-shade Unicorn'
  ].join('\n')
});

dazzlingShade(cli.input[0]);
