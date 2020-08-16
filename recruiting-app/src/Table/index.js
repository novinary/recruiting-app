import React from "react";
import ReactDOM from "react-dom";
import Rows from "../Rows";

class Table extends React.Component {
  render() {
    return (
      <table>
        <Rows text="Firstname"></Rows>
      </table>
    );
  }
}

export default Table;
