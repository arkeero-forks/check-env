#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
try {
    (0, _1.checkEnv)(process.argv.slice(2));
}
catch (err) {
    console.error(err.message);
    process.exit(1);
}
