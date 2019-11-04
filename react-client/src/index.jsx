import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
