import React from "react";
// import { data } from "./dummy_data";
// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
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
            <tr>
              {this.state.data.map(item => (
                <div>
                  <td>{item.title}</td>
                  <td>{item.id}</td>
                  <td>{item.score}</td>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopTen;
