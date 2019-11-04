import React from "react";
import ReactDOM from "react-dom";
import TopTenStories from "./components/topTen.jsx";
import TopTenAuthors from "./components/topTenAuthors.jsx";

import $ from "jquery";
import Data from "../dummy_data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], authors: [], showAuth: false };
  }

  componentDidMount() {
    this.getNewsDataFromDb();
    this.getAuthorsDataFromDb();
  }
  getNewsDataFromDb() {
    var that = this;
    $.get("http://localhost:8000/api/story/", function(data) {
      that.setState({ news: data });
    });
  }
  getAuthorsDataFromDb() {
    var that = this;
    $.get("http://localhost:8000/api/author/", function(data) {
      that.setState({ authors: data });
    });
  }
  changeView() {
    this.setState({ showAuth: !this.state.showAuth });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeView.bind(this)}>Top Ten Stories</button>
        <button onClick={this.changeView.bind(this)}>Top Ten Authors</button>
        {this.state.showAuth ? (
          <TopTenAuthors data={this.state.authors} />
        ) : (
          <TopTenStories data={this.state.news} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
