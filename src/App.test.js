import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

test("renders a test", () => {
    const wrapper = shallow(<App />)
});
