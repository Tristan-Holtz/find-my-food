import React, { Component } from "react";
import "./RestaurantRow.css";
export class RestaurantRow extends Component {
  state = {};

  render() {
    console.log(this.props.info);
    const { genre, name, city, state, telephone } = this.props.info;
    return (
      <section className="restaurant-row">
        <div className="row_div-right">
          <h2>{name}</h2>
          <p>
            <b>Phone Number:</b> {telephone}
          </p>
          <p>
            <b>Cuisine:</b> {genre}
          </p>
        </div>
        <div className="row_div-left">
          <p>
            {city}, {state}
          </p>
          <p>more info</p>
        </div>
      </section>
    );
  }
}

export default RestaurantRow;
