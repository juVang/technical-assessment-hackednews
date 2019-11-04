import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <TopTen />;
  }
}
ReactDOM.render(<App Data />, document.getElementById("app"));
