import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Mycounter from "./Component/Mycounter";
import { connect } from "react-redux";
class App extends Component {
  render() {
    const { count, increment, decrement, onChangeEvent } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Mycounter
            value={count}
            onChangeEvent={onChangeEvent}
            onIncrement={increment}
            onDecrement={decrement}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    onChangeEvent: e =>
      dispatch({ type: "change", payload: Number(e.target.value) })
  };
};
App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
