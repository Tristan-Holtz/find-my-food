import React, { Component } from "react";
import RestaurantRow from "../RestaurantRow/RestaurantRow";
import "./RestaurantContainer.css";
import FilterMenu from "../FilterMenu/FilterMenu";
import { connect } from "react-redux";

export class RestaurantContainer extends Component {
  state = {
    restaurantsList: [],
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
    this.setState({ restaurants: [...restaurants] });
    const restaurantList = restaurants.map((res) => {
      return <RestaurantRow info={res} />;
    });
    this.setState({ restaurantsList: [...restaurantList] });
  }

  render() {
    return (
      <main>
        <FilterMenu restaurants={this.state.restaurants} />
        <section className="restaurant-container">
          <h3>Results:</h3>
          {this.state.restaurantsList}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
