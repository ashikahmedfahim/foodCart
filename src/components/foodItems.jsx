import React, { Component } from "react";
import FoodItem from "./foodItem";

class FoodItems extends Component {
  render() {
    console.log("FoodItems - Render");
    const { onRemoveAll, onRemove, onAdd, onDecrease } = this.props;
    return (
      <div>
        <div className="row">
          {this.props.items.map((obj) => (
            <FoodItem
              key={obj.id}
              onDelete={onRemove}
              onAdd={onAdd}
              onDecrease={onDecrease}
              foodItem={obj}
            >
              <h5>{obj.name}</h5>
            </FoodItem>
          ))}
        </div>
        <div className="d-flex justify-content-center m-5">
          <button onClick={onRemoveAll} className="btn btn-primary btn-lg">
            Deselect All
          </button>
        </div>
      </div>
    );
  }
}

export default FoodItems;
