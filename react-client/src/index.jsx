import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    var that = this;
    $.ajax({
      url: "/",
      type: "GET",
      data: "",
      success: function(res) {
        console.log(res);
        that.setState({
          data: res
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  render() {
    return <TopTen data={this.state.data} />;
  }
}
ReactDOM.render(<App Data />, document.getElementById("app"));
