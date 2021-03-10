import "./App.css";
import FoodItems from "./components/foodItems";
import NavBar from "./components/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import CheckOut from "./components/checkOut";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 0, name: "Rice", price: 50, img: "./assets/1.jpeg" },
      {
        id: 2,
        value: 0,
        name: "Fried Rice",
        price: 150,
        img: "./assets/2.jpeg",
      },
      {
        id: 3,
        value: 0,
        name: "Chicken Fry",
        price: 250,
        img: "./assets/3.jpeg",
      },
      { id: 4, value: 0, name: "Salad", price: 50, img: "./assets/4.jpeg" },
      { id: 5, value: 0, name: "Pasta", price: 80, img: "./assets/5.jpeg" },
      { id: 6, value: 0, name: "Coffee", price: 50, img: "./assets/6.jpeg" },
    ],
  };

  constructor() {
    super();
    console.log("App Constructor");
  }
  componentDidMount() {
    console.log("App Mounted");
  }

  removeFoodItem = (id) => {
    //console.log('remove button pressed!!', id);
    const items = this.state.items.filter((i) => i.id !== id);
    this.setState({ items });
  };
  removeAll = () => {
    console.log("ok");
    const items = this.state.items.map((f) => {
      f.value = 0;
      return f;
    });
    this.setState({ items });
    console.log(this.state.items);
  };
  addFoodItem = (f) => {
    //console.log(f);
    const items = [...this.state.items];
    const index = items.indexOf(f);
    items[index] = { ...f };
    items[index].value++;
    this.setState({ items });
    //console.log(this.state.items[index]);
  };

  decreaseFoodItem = (f) => {
    const items = [...this.state.items];
    const index = items.indexOf(f);
    items[index] = { ...f };
    if (items[index].value > 0) {
      items[index].value--;
      this.setState({ items });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Router path="/" exact>
            <NavBar
              totalCount={this.state.items.filter((i) => i.value > 0).length}
            />
            <div className="container">
              <FoodItems
                items={this.state.items}
                onAdd={this.addFoodItem}
                onDecrease={this.decreaseFoodItem}
                onRemove={this.removeFoodItem}
                onRemoveAll={this.removeAll}
              />
            </div>
          </Router>
          <Router path="/checkOut" exact>
            <CheckOut key={this.state.items.id} obj={this.state}/>
          </Router>
        </Switch>
        <Link to={"/checkOut"} className="d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" style={{ color: "white" }}>
            Check Out
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default App;
