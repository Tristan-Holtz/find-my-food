import React from "react";
import { FilterMenu } from "./FilterMenu";
import { shallow } from "enzyme";

describe("FilterMenu", () => {
  let wrapper;
  let props = [];
  it("should render the component", () => {
    wrapper = shallow(
      <FilterMenu restaurants={props} resetRestaurants={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should should be able to set name in state", () => {
      const mockEvent = {
        target: {
          name: "genre",
          value: "Asian",
        },
      };
      wrapper.instance().filterRestaurants = jest.fn();
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state("genre")).toEqual("Asian");
    });
  });
});
