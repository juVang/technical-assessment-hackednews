import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
import dummyData from "../dummy_data.js";

// const App = props => <TopTen props={dummyData} />;
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { dummyData };
  // }
  render() {
    return <TopTen />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
