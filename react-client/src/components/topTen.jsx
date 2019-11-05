import React from "react";
import Seacrh from "./seacrh.jsx";
import RecommendedStories from "./recommendation.jsx";
import $ from "jquery";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
// const TopTen = () => (
class TopTen extends React.Component {
  constructor(props) {
    super(props);
    const STORY = "STORY";
    const AUTHOR = "AUTHOR";
    console.log(props);
    this.state = {
      story: {}
    };
  }
  handleClick(e) {
    console.log(e.target.id);
    this.setState({
      story: this.props.data[e.target.id]
    });
    console.log(this.state);
  }
  render() {
    if (this.props.page === "STORY") {
      return (
        <div>
          <br></br>
          <h1> Top Ten Stories </h1>
          <table id="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((item, index) => (
                <tr key={index}>
                  <td onClick={this.handleClick.bind(this)} id={index}>
                    {item.title}
                  </td>
                  <td>{item.by}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (this.props.page === "AUTHOR") {
      return (
        <div>
          <br></br>
          <h1> Top Ten Authors</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Karma</th>
                <th>About</th>
              </tr>
            </thead>
            <tbody>
              {this.props.authors.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.karma}</td>
                  <td>{item.about}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (this.props.page === "SEARCH") {
      return <Seacrh></Seacrh>;
    } else if (this.props.page === "RECOMM") {
      return <RecommendedStories story={this.state.story}></RecommendedStories>;
    }
  }
}

export default TopTen;

// <tr>
// <td>Video Games Are Changing the Way Soccer Is Played</td>
// <td>mhb</td>
// <td>100</td>
// </tr>
