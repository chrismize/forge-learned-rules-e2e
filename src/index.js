// Entry point. Every exported helper lives in src/ and is re-exported from here.
const { greet } = require("./greet");

module.exports = { greet };
