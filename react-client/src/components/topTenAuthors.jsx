import React from "react";

export default class TopTenAuthors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Top Ten Authors </h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Karma</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.length >= 1
              ? this.props.data.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element["name"]}</td>
                      <td>{element["karma"]}</td>
                      <td>{element["about"]}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
