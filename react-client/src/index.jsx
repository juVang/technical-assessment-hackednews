import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import $ from "jquery";

// const App = (props) => <TopTen />;
class App extends React.Component {
  constructor(props) {
    super(props);
    const STORY = "STORY";
    const AUTHOR = "AUTHOR";
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
        // console.log(that);
      },
      error: function(err) {
        console.log(`/api/stories: err ${err}`);
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
        <button
          className="tablink"
          name="STORY"
          onClick={this.handleTabClick.bind(this)}
        >
          Top Stories
        </button>
        <button
          className="tablink"
          name="AUTHOR"
          onClick={this.handleTabClick.bind(this)}
        >
          Top Authors
        </button>
        <button
          className="tablink"
          name="SEARCH"
          onClick={this.handleTabClick.bind(this)}
        >
          Search
        </button>
        <br></br>
        <TopTen
          authors={this.state.authors}
          data={this.state.data}
          page={this.state.page}
        />
      </div>
    );
  }
}
// {/* <button onClick={this.getDataFromServer.bind(this)}></button> */}

ReactDOM.render(<App />, document.getElementById("app"));
