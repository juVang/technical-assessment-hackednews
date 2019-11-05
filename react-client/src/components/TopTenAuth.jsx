import React from "react";
import TableRow from "./TableRow.jsx";
import dumyData from "../../dummy_data.js";
import $ from "jquery";
export default class TopTenAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log("TopTenAuth");
    $.ajax({
      url: "/api/story/top-auth",
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
              <th>Name</th>
              <th>Karma</th>
              <th>about</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(elem => {
              return (
                <TableRow
                  param1={elem.id}
                  param2={elem.karma}
                  param3={elem.about}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
