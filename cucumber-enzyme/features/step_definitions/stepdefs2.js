const { Given, When } = require("cucumber");
const expect = require("expect");
const assert = require("assert");
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../src/App";

configure({ adapter: new Adapter() });

function add2(a) {
  return a + 3;
}

Given("num add2 {int}", function(int) {
  expect(add2(int)).toEqual(6);
});

When("get App component", function() {
  const wrapper = shallow(<App />);
  // expect(wrapper.state("test")).toEqual("01");
  // expect(wrapper.instance().testFunction()).toEqual("test function");
  assert(wrapper.contains("Learn React"));
  assert(wrapper.instance().testFunction() === "test function");
});
