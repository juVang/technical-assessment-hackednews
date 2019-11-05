import React from "react";
import TopTenStories from "./topstories.jsx";
import TopTenAuthers from "./topAuthers.jsx";

class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      showAuthers: false,
      showStories: true
    };
  }

  getAuthers(e) {
    console.log("Authers Stories Buttons");
    this.setState({
      showAuthers: !this.state.showAuthers,
      showStories: !this.state.showStories
    });
    if (!this.state.showStories) {
      $(e.target)
        .text("show Stories")
        .button("refresh");
    } else {
      $(e.target)
        .text("show Authers")
        .button("refresh");
    }
  }

  render() {
    return (
      <div>
        <h1> Top Ten Stories </h1>

        <button id="toggele" onClick={this.getAuthers.bind(this)}>
          {" "}
          Show Authers
        </button>

        {this.state.showStories ? (
          <TopTenStories data={this.props.data} />
        ) : (
          <TopTenAuthers data={this.props.data} />
        )}
        <thead></thead>
      </div>
    );
  }
}

export default TopTen;
