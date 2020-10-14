import React, { Component } from "react";

export class RestaurantRow extends Component {
  state = {};

  render() {
    console.log(this.props.info);
    const { genre, name, city, state, telephone } = this.props.info;
    return (
      <section className="restaurant-row">
        <div>
          <h2>{name}</h2>
          <p>{telephone}</p>
          <p>{genre}</p>
        </div>
        <div>
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
