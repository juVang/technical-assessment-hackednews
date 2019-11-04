import React from "react";
import Seacrh from "./seacrh.jsx";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props) {
    super(props);
    const s = "STORY";
    const a = "AUTHOR";
    console.log(props);
  }
  render() {
      return (
        <div>
          <br></br>
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
              {this.props.data.map((formdb, i) => (
                <tr key = {i}>
                  <td>{fromdb.title}</td>
                  <td>{fromdb.by}</td>
                  <td>{fromdb.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    

   
  }
}

export default TopTen;