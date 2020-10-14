import React, { Component } from "react";
import { searchRestaurants } from "../actions/index";
import { connect } from "react-redux";

export class FilterMenu extends Component {
  state = {
    restaurants: [],
  };

  filterRestaurants(type, search) {
    const results = this.props.restaurants.filter((res) => {
      return res[type] === search;
    });
    searchRestaurants(results);
  }

  render() {
    return (
      <aside className="filter-aside">
        <form className="filter-form">
          <div className="name-div">
            <label>Name</label>
            <input className="name-input"></input>
          </div>
          <div className="state-div">
            <label>State</label>
            <input className="state-input"></input>
          </div>
          <div className="genre-div">
            <label>Genre</label>
            <input className="genre-input"></input>
          </div>
        </form>
      </aside>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  searchRestaurants: (search) => {
    dispatch(searchRestaurants(search));
  },
});

export default connect(null, mapDispatchToProps)(FilterMenu);
