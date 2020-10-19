import React from "react";
import RestaurantRow from "./RestaurantRow";
import { shallow } from "enzyme";

describe("RestaurantRow", () => {
  let props = {
    genre: "Asian",
    name: "Uchi",
    city: "Denver",
    state: "CO",
    telephone: "(000)123-4567",
    address1: "Somewhere in RiNo, I forget",
    id: "98whef982eifhw",
  };
  let wrapper = shallow(<RestaurantRow info={props} />);
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
