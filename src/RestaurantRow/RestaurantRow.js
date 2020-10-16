import React, { Component } from "react";
import "./RestaurantRow.css";
export class RestaurantRow extends Component {
  state = {};

  render() {
    const {
      genre,
      name,
      city,
      state,
      telephone,
      address1,
      id,
    } = this.props.info;
    const splitGenres = genre.split(",");
    return (
      <section key={id} className="restaurant-row">
        <div className="row_div-right">
          <h2>{name}</h2>
          <p>
            <b>Phone Number:</b> {telephone}
          </p>
          <p>
            <b>Cuisine:</b> {splitGenres.join(", ")}
          </p>
        </div>
        <div className="row_div-left">
          <p>{address1}</p>
          <p>
            {city}, {state}
          </p>
        </div>
      </section>
    );
  }
}

export default RestaurantRow;
