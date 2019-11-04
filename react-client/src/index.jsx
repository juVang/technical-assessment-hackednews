import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
import { type } from "os";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: []
    };
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: "/stories",
      type: "GET",
      success: function(data) {
        that.setState({
          topStories: data.data
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  render() {
    return <TopTen data={this.state.topStories} />;
  }
}

// const App = (props) =>  <TopTen />;

ReactDOM.render(<App />, document.getElementById("app"));
