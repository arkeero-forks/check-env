module.exports = function (variables) {
  require('dotenv').config();
  var missing = [];

  variables.forEach(function (variable) {
    if (typeof process.env[variable] !== "string" || process.env[variable].length === 0) {
      missing.push(variable);
    }
  });
  if (missing.length > 0) {
    if (missing.length === 1)
      throw new Error('Missing environment variable ' + missing[0]);
    throw new Error('Missing environment variables ' + missing.join(', '));
  }
};
