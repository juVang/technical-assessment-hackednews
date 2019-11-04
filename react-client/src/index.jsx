import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";

// const App = (props) => <TopTen />;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getDataFromServer();
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
        // console.log(that);
      },
      error: function(err) {
        console.log(`/api/stories: err ${err}`);
      }
    });
  }

  render() {
    return (
      <div>
        <TopTen data={this.state.data} />
      </div>
    );
  }
}
// {/* <button onClick={this.getDataFromServer.bind(this)}></button> */}

ReactDOM.render(<App />, document.getElementById("app"));
