import React, { Component } from 'react'

export default class ThongTinChiTiet extends Component {
    render() {
        // let { image, } = this.props.xemChiTiet
        let { price, name, description, quantity, image } = this.props.state
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Hình ảnh</td>
                                        <td><img src={image} alt="" style={{ width: "50px" }} /></td>

                                    </tr>
                                    <tr>
                                        <td>Tên sản phẩm</td>
                                        <td>{name}</td>

                                    </tr>
                                    <tr>
                                        <td>Gía</td>
                                        <td>{price}$</td>

                                    </tr>
                                    <tr>
                                        <td>Mô tả sản phẩm</td>
                                        <td>{description}</td>

                                    </tr>
                                    <tr>
                                        <td>Số lượng trong kho</td>
                                        <td>{quantity}</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
