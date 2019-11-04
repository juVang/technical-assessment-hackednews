import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import $ from "jquery";

class AuthorSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchData = this.searchData.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  searchData() {
    $.ajax({
      url: "/api/story/search",
      type: "POST",
      data: { name: this.state.search },
      dataType: "json",
      success: function(result) {
        console.log(result);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
          />{" "}
          <button onClick={this.searchData}>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.props.data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}
export default AuthorSearch;
