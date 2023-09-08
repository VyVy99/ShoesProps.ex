import React, { Component } from 'react'
import listShoes from './Data'
import ShoesItem from './ShoesItem'
export default class Shoes extends Component {

 
    render() {
    return (
      <div>
        <h2 className='bg-danger'>Shoes Exercise</h2>
<ShoesItem shoes={listShoes} />


      </div>
    )
  }
}
