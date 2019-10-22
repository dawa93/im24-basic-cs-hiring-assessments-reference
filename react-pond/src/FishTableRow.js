import React, { Component } from "react";

//TODO: FishTable has many FishTableRows
class FishTableRow extends Component {
  render() {
    return (
      <div>
        <img src={this.props.fish.image} />
        <div>{this.props.fish.name}</div>
        <div>{this.props.fish.description}</div>
      </div>
    );
  }
}

export default FishTableRow;
