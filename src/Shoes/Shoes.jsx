import React, { Component } from "react";
import listShoes from "./Data";
import ShoesItem from "./ShoesItem";
import ShoesDetail from "./ShoesDetail";
import Cart from "./Cart";
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
    isShownModal: false,
    listShoesCart: [],
  };
  handelOnClick = (item) => {
    this.setState({
      data: item,
    });
  };
  // cart
  showModal = () => {
    this.setState({
      isShownModal: true,
    });
  };
  handelCloseMOdal = () => {
    this.setState({
      isShownModal: false,
    });
  };
  handelAddToCart = (item) => {
    console.log("handelAddToCart", item);
    // this.props.onAddToCart(item)
    const updatedCart = [...this.state.listShoesCart, item];
    this.setState({
      listShoesCart: updatedCart,
    });
  };

  removeFromCart = (index) => {
    const updatedCart = [...this.state.listShoesCart];
    updatedCart.splice(index, 1);
    this.setState({
      listShoesCart: updatedCart,
    });
  };

  render() {
    return (
      <div>
        <h2 className="bg-danger">Shoes Exercise</h2>
        <button 
          onClick={() => this.showModal()}
          className="btn btn-danger my-5"
        >
          <i className="fa-regular fa-bag-shopping btn btn-warning"></i>
        </button>
        <ShoesItem
          shoes={listShoes}
          handelShoesClick={this.handelOnClick}
          onAddToCart={this.handelAddToCart}
        />
        <ShoesDetail detail={this.state.data} />
        {/* de cho no an di */}
        {this.state.isShownModal && (
          <Cart
            onRemoveAddToCart={this.removeFromCart}
            onCloseModal={this.handelCloseMOdal}
            data={this.state.listShoesCart}
          />
        )}
      </div>
    );
  }
}
