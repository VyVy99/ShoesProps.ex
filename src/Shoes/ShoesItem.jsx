import React, { Component } from 'react'

export default class itemItem extends Component {

 
  render() {
    console.log("onAddToCart",this.props.onAddToCart);

    return (
      <div>
        <div className="row bg-success">
            {this.props.shoes.map((item, index)=>{
                return (
                  <div key={index} className="col-4">
                    <img src={item.image} alt="" />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button
                      onClick={() => this.props.handelShoesClick(item)}
                      className="btn btn-primary"
                    >
                      View more
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                    <button
                      onClick={() => this.props.onAddToCart(item)}
                      className="btn btn-warning mx-3"
                    >
                      Add To Cart
                    </button>
                  </div>
                );
            })}
    
        </div>
      </div>
    )
  }
}
