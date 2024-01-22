"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnv = void 0;
const dotenv_1 = require("dotenv");
const checkEnv = (variables) => {
    (0, dotenv_1.config)();
    const missing = [];
    variables.forEach(function (variable) {
        if (typeof process.env[variable] !== "string" || process.env[variable].length === 0) {
            missing.push(variable);
        }
    });
    if (missing.length > 0) {
        throw new Error(`Missing environment variable${missing.length > 1 ? "s" : ""} ${missing.join(', ')}`);
    }
};
exports.checkEnv = checkEnv;
