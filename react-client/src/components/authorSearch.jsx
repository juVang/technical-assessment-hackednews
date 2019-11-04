import React from "react";
import $ from "jquery";

class AuthorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { karma: "" };
  }
  Search() {
    //Ajax get Request
  }
  render() {
    return (
      <div>
        <input type="text"></input>
        <button onClick={this.Search.bind(this)}>Search</button>
      </div>
    );
  }
}
export default AuthorSearch;
