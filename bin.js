#!/usr/bin/env node
var check = require('./');

try {
  check(process.argv.slice(2));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
