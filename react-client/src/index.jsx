import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
import Data from "../dummy_data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb() {
    var that = this;
    $.get("http://localhost:8000/api/story/", function(data) {
      that.setState({ news: data });
    });
  }
  render() {
    return (
      <div>
        <TopTen data={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
