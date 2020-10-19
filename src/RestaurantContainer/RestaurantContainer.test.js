import React from "react";
import { RestaurantContainer } from "./RestaurantContainer";
import { shallow } from "enzyme";

describe("RestaurantContainer", () => {
  let wrapper;
  let props = {
    restaurants: [1, 2, 3],
    currentPage: [1],
    currentPages: [1, 2],
  };
  it("should render the component", () => {
    wrapper = shallow(<RestaurantContainer {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
