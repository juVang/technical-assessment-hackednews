import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
import dummy from "../dummy_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:1500/api/story")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    return <TopTen data={this.state.data} />;
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
