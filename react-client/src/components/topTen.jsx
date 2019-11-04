import React from "react";
export default class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            {this.props.data.length >= 1
              ? this.props.data.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element["title"]}</td>
                      <td>{element["by"]}</td>
                      <td>{element["score"]}</td>
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
