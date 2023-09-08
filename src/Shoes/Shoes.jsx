import React, { Component } from "react";
import listShoes from "./Data";
import ShoesItem from "./ShoesItem";
import ShoesDetail from "./ShoesDetail";
export default class Shoes extends Component {
  state = {
    data: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  handelOnClick = (item) => {
    this.setState({
      data: item,
    });
  };

  render() {
    return (
      <div>
        <h2 className="bg-danger">Shoes Exercise</h2>
        <ShoesItem shoes={listShoes} handelShoesClick={this.handelOnClick} />
        <ShoesDetail detail={this.state.data} />
      </div>
    );
  }
}
