import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders the navbar component", () => {
    const wrapper = shallow(<App />);
    const navbarComponent = wrapper.find("AllRoutes");

    expect(navbarComponent.exists()).toBe(true);
  });
});
//to run testcases make changes in setupTests.js
//add this
//import Enzyme from "enzyme";
//import Adapter from "enzyme-adapter-react-16";

//Enzyme.configure({ adapter: new Adapter() });

//after doing this install below command
//install this  npm install --save-dev enzyme-adapter-react-16 --legacy-peer-deps
