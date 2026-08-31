const assert = require("node:assert");
const { test } = require("node:test");
const { greet } = require("../src/greet");

test("greet uses the name", () => {
  assert.strictEqual(greet("world"), "Hello, world!");
});
