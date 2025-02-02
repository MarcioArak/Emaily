// keys.js choose which set of credentials to use

if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in developers - return the dev set of keys
  module.exports = require("./dev");
}
