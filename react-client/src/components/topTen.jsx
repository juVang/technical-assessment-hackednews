import React from "react";
import $ from "jquery";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.

// const TopTen = props => (
//   <div>
//     <h1> Top Ten Stories </h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Score</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{this.props.story.title}</td>
//           <td>{this.props.story.id}</td>
//           <td>{this.props.story.score}</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Author: "",
      Score: ""
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({
      Title: data.title,
      Author: data.author,
      Score: data.score
    });
  }
  displayStories() {
    $.ajax({
      url: "/",
      method: "GET",
      success: function(data) {
        updateState(data);
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.displayStories.bind(this)}>
          Top Ten stories
        </button>
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
              <td>{this.state.title}</td>
              <td>{this.state.id}</td>
              <td>{this.state.score}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopTen;
