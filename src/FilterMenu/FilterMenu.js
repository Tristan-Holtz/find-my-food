import React, { Component } from "react";
import {
  searchRestaurants,
  resetRestaurants,
  changeCurrentPage,
  changeSelection,
} from "../actions/index";
import { connect } from "react-redux";
import RestaurantRow from "../RestaurantRow/RestaurantRow.js";
import "./FilterMenu.css";

export class FilterMenu extends Component {
  state = {
    originalRestaurants: [],
    restaurants: [],
    genre: "",
    state: "",
  };

  componentDidUpdate = () => {
    if (this.state.genre === "" && this.state.state === "") {
      this.props.resetRestaurants(this.state.originalRestaurants[0]);
    } else if (this.state.genre === "" || this.state.state === "") {
      this.filterRestaurants();
    }
  };

  filterRestaurants = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { genre, state } = this.state;
    const {
      restaurants,
      searchRestaurants,
      changeCurrentPage,
      changeSelection,
    } = this.props;
    let results = [];
    if (genre) {
      results = restaurants[0].filter((res) => {
        return res.genre.toLowerCase().includes(genre.toLowerCase());
      });
    }
    if (state) {
      results = restaurants[0].filter((res) => {
        return res.state.toLowerCase().includes(state.toLowerCase());
      });
    }
    if (genre && state) {
      results = restaurants[0]
        .filter((res) => {
          return res.genre.toLowerCase().includes(genre.toLowerCase());
        })
        .filter((res) => {
          return res.state.toLowerCase().includes(state.toLowerCase());
        });
    }
    const newPages = this.makePages(results);
    searchRestaurants(results);
    changeCurrentPage(newPages);
    if (newPages.length < 10) {
      changeSelection(newPages);
    } else {
      changeSelection(newPages[0]);
    }
  };

  makePages(results) {
    const restaurantList = results.map((res) => {
      return <RestaurantRow info={res} />;
    });
    let currentSelection = [];
    if (restaurantList.length > 10) {
      currentSelection.push(restaurantList.slice(0, 10));
      currentSelection.push(restaurantList.slice(10, 20));
      currentSelection.push(restaurantList.slice(20, 30));
      currentSelection.push(restaurantList.slice(30));
      return currentSelection;
    } else {
      return restaurantList;
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    this.state.originalRestaurants = this.props.restaurants;
    return (
      <aside className="filter-aside">
        <form className="filter-form">
          <div className="state-div">
            <label>State</label>
            <input
              placeholder="CO, NY, etc.."
              className="state-input"
              name="state"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="genre-div">
            <label>Genre</label>
            <input
              placeholder="Cafe, Steak, etc.."
              className="genre-input"
              name="genre"
              onChange={this.handleChange}
            ></input>
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={this.filterRestaurants}
          >
            F I N D
          </button>
        </form>
      </aside>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  searchRestaurants: (search) => {
    dispatch(searchRestaurants(search));
  },
  resetRestaurants: (reset) => {
    dispatch(resetRestaurants(reset));
  },
  changeCurrentPage: (page) => {
    dispatch(changeCurrentPage(page));
  },
  changeSelection: (currentSelection) => {
    dispatch(changeSelection(currentSelection));
  },
});

export default connect(null, mapDispatchToProps)(FilterMenu);
