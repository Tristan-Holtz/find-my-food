import React, { Component } from "react";
import RestaurantRow from "../RestaurantRow/RestaurantRow";
import "./RestaurantContainer.css";
import FilterMenu from "../FilterMenu/FilterMenu";
import { connect } from "react-redux";
import {
  searchRestaurants,
  changeCurrentPage,
  changeSelection,
} from "../actions/index";

export class RestaurantContainer extends Component {
  state = {
    restaurants: [],
    viewingPages: [],
    currentPage: [],
    pageNumber: 0,
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

  makePages() {
    const { restaurants } = this.props;
    const restaurantList = restaurants.map((res) => {
      return <RestaurantRow info={res} />;
    });
    let currentSelection = [];
    if (restaurantList.length > 10) {
      currentSelection.push(restaurantList.slice(0, 10));
      currentSelection.push(restaurantList.slice(10, 20));
      currentSelection.push(restaurantList.slice(20, 30));
      currentSelection.push(restaurantList.slice(30));
    }
    this.props.changeCurrentPage(currentSelection);
    this.props.changeSelection(currentSelection[0]);
  }

  getRestaurantList(places) {
    const sortedList = places.sort((a, b) =>
      a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
    );
    this.setState({ restaurants: [sortedList] });
    searchRestaurants(sortedList);
    this.makePages();
  }

  changePage(number = 0) {
    if (this.props.currentPages.length > number - 1) {
      this.props.changeSelection(this.props.currentPages[number]);
    }
  }

  render() {
    const { restaurants } = this.props;
    console.log(restaurants);
    if (restaurants.length) {
      return (
        <main>
          <FilterMenu restaurants={this.state.restaurants} />
          <section className="restaurant-container">
            <div className="container-top">
              <h3>Results:</h3>
              <div>
                <p>
                  <button
                    className="page-button"
                    onClick={() => this.changePage(0)}
                  >
                    1
                  </button>
                  ,
                  <button
                    className="page-button"
                    onClick={() => this.changePage(1)}
                  >
                    2
                  </button>
                  ,
                  <button
                    className="page-button"
                    onClick={() => this.changePage(2)}
                  >
                    3
                  </button>
                  ,
                  <button
                    className="page-button"
                    onClick={() => this.changePage(3)}
                  >
                    4
                  </button>
                </p>
              </div>
              <button></button>
            </div>
            {this.props.currentPage}
          </section>
        </main>
      );
    } else {
      return (
        <main>
          <FilterMenu restaurants={this.state.restaurants} />
          <section className="restaurant-container">
            <h3>Results:</h3>
            <p>No results found</p>
          </section>
        </main>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  currentPages: state.currentPages,
  currentPage: state.currentPage,
});

export const mapDispatchToProps = (dispatch) => ({
  searchRestaurants: (search) => {
    dispatch(searchRestaurants(search));
  },
  changeCurrentPage: (page) => {
    dispatch(changeCurrentPage(page));
  },
  changeSelection: (currentSelection) => {
    dispatch(changeSelection(currentSelection));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
