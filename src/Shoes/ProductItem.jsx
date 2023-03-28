import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { name, price, image } = this.props.shoes
        return (
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <button href="#" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={() => {
                        this.props.xemChiTiet(this.props.shoes)
                    }}>Chi tiết sản phẩm</button>
                </div>
                
            </div>
        )
    }
}
