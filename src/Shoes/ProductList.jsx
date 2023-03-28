import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderShoes = () => {
        return this.props.listShoes.map((item) => { 
            return ( 
            <div className="col-4 p-2" key={item.id}>
                <ProductItem shoes={item} xemChiTiet ={this.props.xemChiTiet}/>
            </div>
      )
         })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
