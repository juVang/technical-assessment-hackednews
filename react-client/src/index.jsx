import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import TopTenAuthors from "./components/topTenAuthors.jsx";
import AuthorSearch from "./components/authorSearch.jsx";
import RecommendedStories from "./components/recommendedStories.jsx";
import $ from "jquery";

//iterate over the json data file using map
//send the data to the Top Ten component and render it dynimacally
//how can i get the data from the dummy-data

//var stories = require("react-client/dummy_data.js");

// const App = props => {
//   props.stories.map(story => {
//     <li>
//       <TopTen story={story} />
//     </li>;
//   });
// };

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopTen />
        <TopTenAuthors />
        <AuthorSearch />
        <RecommendedStories />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
