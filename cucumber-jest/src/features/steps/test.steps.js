import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow } from "enzyme";
import App from "../../App";

const feature = loadFeature("./src/features/test2.feature");

defineFeature(feature, (test) => {
  const wrapper = shallow(<App />);

  test("test02", ({ given, when, then }) => {
    given("test02 given", () => {
      expect(wrapper.state("test")).toEqual("01");
    });
    when("test02 when", () => {
      expect(wrapper.instance().testFunction()).toEqual("test01 function");
    });
    then("test02 then", () => {
      // expect(wrapper.state("test")).toEqual("01");
    });
  });

  test("test03", ({ given, when, then }) => {
    given("test03 given", () => {
      expect(wrapper.state("test")).toEqual("01");
    });
    when("test03 when", () => {
      expect(wrapper.instance().testFunction()).toEqual("test01 function");
    });
    then("test03 then", () => {
      // expect(wrapper.state("test")).toEqual("01");
    });
  });
});
