import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: STORY,
      authors: []
    };
  }

  handleTabClick(e) {
    this.setState({
      page: e.target.name
    });
  }
  componentDidMount() {
    this.getDataFromServer();
    this.getAuthorsFromServer();
  }

  getDataFromServer() {
    var that = this;
    $.ajax({
      url: "/api/stories",
      type: "GET",
      success: function(data) {
        console.log(data);
        that.setState({
          data: data
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  getAuthorsFromServer() {
    var that = this;
    $.ajax({
      url: "/api/authors",
      type: "GET",
      success: function(data) {
        console.log(data);
        that.setState({
          authors: data
        });
      },
      error: function(err) {
        console.log(`/api/stories: err ${err}`);
      }
    });
  }

  render() {
    return (
    <div></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
