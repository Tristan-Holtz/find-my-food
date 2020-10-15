import React, { Component } from "react";
import RestaurantRow from "../RestaurantRow/RestaurantRow";
import "./RestaurantContainer.css";
import FilterMenu from "../FilterMenu/FilterMenu";
import { connect } from "react-redux";
import { searchRestaurants } from "../actions/index";

export class RestaurantContainer extends Component {
  state = {
    isLoading: true,
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
    const sortedList = restaurants.sort((a, b) =>
      a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
    );
    this.setState({ restaurants: [sortedList] });
    this.props.searchRestaurants(sortedList);
  }

  render() {
    const { restaurants } = this.props;
    const restaurantList = restaurants.map((res) => {
      return <RestaurantRow info={res} />;
    });
    return (
      <main>
        <FilterMenu restaurants={this.state.restaurants} />
        <section className="restaurant-container">
          <h3>Results:</h3>
          {restaurantList}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export const mapDispatchToProps = (dispatch) => ({
  searchRestaurants: (search) => {
    dispatch(searchRestaurants(search));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
