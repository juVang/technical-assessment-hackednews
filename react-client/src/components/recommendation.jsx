import React from "react";
import $ from "jquery";

class RecommendedStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      story: { title: "" },
      hide: true,
      data: []
    };
  }

  componentDidMount() {
    this.getRecommendedItems();
  }
  getRecommendedItems() {
    var that = this;
    console.log(that.props.story);
    var empty = false;
    if (that.props.story.kids.length === 0) {
      empty = true;
    }
    $.ajax({
      type: "POST",
      url: "api/remonded",
      data: { kids: that.props.story.kids, empty: empty },
      success: function(data) {
        console.log(data);
        that.setState({
          data: data
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <h4>showing similar stories to {this.props.story.title}</h4>
          <br></br>
          <table className={this.state.hide ? "show" : "hide"}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.by}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RecommendedStories;
