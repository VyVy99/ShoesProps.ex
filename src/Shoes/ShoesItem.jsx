import React, { Component } from 'react'

export default class itemItem extends Component {
  render() {
    console.log(this.props);

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
                      Add to Carts :
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                );
            })}
    
        </div>
      </div>
    )
  }
}
