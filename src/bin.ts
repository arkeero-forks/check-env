#!/usr/bin/env node
import { checkEnv } from ".";

try {
  checkEnv(process.argv.slice(2));
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
