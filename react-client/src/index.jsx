import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import TopTen from "./components/topTen.jsx";
import TopAuthors from "./components/TopAuthors.jsx";
import $ from "jquery";
import dummy from "../dummy_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:1500/api/story")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
    fetch("http://localhost:1500/api/story/author")
      .then(response => response.json())
      .then(data => this.setState({ data1: data }));
  }

  render() {
    return (
      <div>
        <TopTen data={this.state.data} />
        <TopAuthors data1={this.state.data1} />
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
