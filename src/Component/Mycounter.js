import React, { Component, Fragment } from "react";

class Mycounter extends Component {
  render() {
    const { value, onChangeEvent, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <Fragment>
          MY COUNTER {value}
          <br />
          Clicked--
          <input
            type="number"
            id="txt"
            value={value}
            onChange={onChangeEvent}
          />{" "}
          times....{" "}
          <button type="button" onClick={onIncrement}>
            +
          </button>{" "}
          <button type="button" onClick={onDecrement}>
            -
          </button>{" "}
        </Fragment>
      </div>
    );
  }
}

export default Mycounter;
