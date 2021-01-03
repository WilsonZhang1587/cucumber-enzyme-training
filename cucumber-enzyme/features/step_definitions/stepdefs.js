const { Given, When } = require("cucumber");
const expect = require("expect");

function add(a) {
  return a + 1;
}

Given("num add {int}", function(int) {
  expect(add(int)).toEqual(2);
});
