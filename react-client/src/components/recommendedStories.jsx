import React from "react";
class RecommendedStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };
  }
  showStories() {
    //will send ajax request to the server
    //the server will handle an ajax get request and retreive the data from the data base
  }
  render() {
    return (
      <div>
        <button onClick={this.showStories.bind(this)}>
          Recommended Stories
        </button>
      </div>
    );
  }
}
export default RecommendedStories;
