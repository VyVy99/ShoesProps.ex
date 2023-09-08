import React, { Component } from 'react'

export default class ShoesDetail extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="py-4">
        <h2>Shoes detail</h2>
        <img src={this.props.detail.image} alt="" />
        <p>Name:{this.props.detail.name} </p>
        <p>Description:{this.props.detail.description}</p>
        <p>Price:{this.props.detail.price}</p>
      </div>
    );
  }
}
