import React from "react";
import TableRow from "./TableRow.jsx";
import dumyData from "../../dummy_data.js";
import $ from "jquery";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
export default class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log("TopTen");
    $.ajax({
      url: "/api/story/",
      type: "GET",
      ContentType: "application/json",
      success: data => {
        console.log(data);
        this.setState({ data: data });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1> Top Ten Stories </h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(elem => {
              return (
                <TableRow
                  param1={elem.title}
                  param2={elem.by.id}
                  param3={elem.score}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
