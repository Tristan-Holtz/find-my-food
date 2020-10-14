import React, { Component } from "react";
import RestaurantRow from "../RestaurantRow/RestaurantRow";

export class RestaurantContainer extends Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    })
      .then((response) => response.json())
      .then((restaurants) => this.getRestaurantList(restaurants))
      .catch((error) => console.log(error));
  }

  getRestaurantList(restaurants) {
    const restaurantList = restaurants.map((res) => {
      return <RestaurantRow info={res} />;
    });
    this.setState({ restaurants: [...restaurantList] });
  }

  render() {
    return (
      <main className="restaurant-container">
        <h3>Restaurants:</h3>
        {this.state.restaurants}
      </main>
    );
  }
}

export default RestaurantContainer;
