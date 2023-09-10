import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    console.log(this.props.onCloseModal);
    return (
      <div
        className="modal"
        style={{ display: "block" }}
        id="shoesModal"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
         
            <div className="modal-footer">
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => this.props.onRemoveAddToCart(item)}
                            >
                              Xoa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

        
              <button
                onClick={this.props.onCloseModal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
