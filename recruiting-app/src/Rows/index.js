import React from "react";
import ReactDOM from "react-dom";

class Rows extends React.Component {
  render() {
    const { text } = this.props;
    return <tr>{text}</tr>;
  }
}

export default Rows;
