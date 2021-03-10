import React, { Component } from "react";

class FoodItem extends Component {
  mystyle = {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
    padding: "8px 8px",
  };

  displayValue() {
    const { value } = this.props.foodItem;
    return value === 0 ? "0" : value;
  }
  render() {
    let spanStyle = this.getSpanClassName();

    return (
      <div style={{ width: "12rem", margin: 5 }} className="card text-center">
        <div className="badge">{this.props.children}</div>
        <img
          src={this.props.foodItem.img}
          className="card-img-top"
          style={{ width: 100, height: 100, margin: "0 auto" }}
          alt={this.props.foodItem.name}
        />
        <div className="card-body">
          <div>
            <span style={this.mystyle} className="badge bg-warning m-2">
              Price : {this.props.foodItem.price}
            </span>
          </div>
          <button
            onClick={() => {
              this.props.onDecrease(this.props.foodItem);
            }}
            className="btn btn-danger btn-sm m-1"
          >
            -
          </button>
          <span style={this.mystyle} className={spanStyle}>
            Taken : {this.displayValue()}
          </span>
          <button
            onClick={() => {
              this.props.onAdd(this.props.foodItem);
            }}
            className="btn btn-success btn-sm m-1"
          >
            +
          </button>
          <div className="row d-flex justify-content-center">
            <button
              onClick={() => this.props.onDelete(this.props.foodItem.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getSpanClassName() {
    let spanStyle = "badge m-1 bg-";
    spanStyle += this.props.foodItem.value === 0 ? "danger" : "warning";
    return spanStyle;
  }
}

export default FoodItem;
