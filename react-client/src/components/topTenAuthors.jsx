import React from "react";
class TopTenAuthors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateState() {
    this.setState = {};
  }
  displayAuthors() {}
  render() {
    return (
      <div>
        <button onClick={this.displayAuthors.bind(this)}>Top Ten Author</button>
      </div>
    );
  }
}
export default TopTenAuthors;
