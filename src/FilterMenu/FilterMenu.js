import React, { Component } from "react";
import { searchRestaurants } from "../actions/index";
import { connect } from "react-redux";

export class FilterMenu extends Component {
  state = {
    restaurants: [],
    genre: "",
    state: "",
  };

  filterRestaurants = (e) => {
    e.preventDefault();
    const { genre, state } = this.state;
    const { restaurants, searchRestaurants } = this.props;
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
    searchRestaurants(results);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <aside className="filter-aside">
        <form className="filter-form">
          <div className="state-div">
            <label>State</label>
            <input
              className="state-input"
              name="state"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="genre-div">
            <label>Genre</label>
            <input
              className="genre-input"
              name="genre"
              onChange={this.handleChange}
            ></input>
            <button type="submit" onClick={this.filterRestaurants}>
              Submit
            </button>
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
