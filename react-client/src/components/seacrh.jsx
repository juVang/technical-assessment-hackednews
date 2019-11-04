import React from "react";
import $ from "jquery";

class Seacrh extends React.Component {
  constructor(props) {
    super(props);
    // this.data = [
    //   //   {
    //   //     id: 21425449,
    //   //     by: "manigandham",
    //   //     title: "A third of popular websites are ‘fingerprinting’ you",
    //   //     score: 28
    //   //   }
    // ];
    this.state = {
      author: "",
      hide: false,
      data: []
    };
  }
  handleSearch() {
    var that = this;
    $.ajax({
      type: "post",
      url: "/stories/user",
      data: { author: this.state.author },

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

    this.setState({
      hide: true
    });
  }

  inputChange(e) {
    this.setState({
      author: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          onChange={this.inputChange.bind(this)}
          type="search"
          id="mySearch"
          name="q"
          placeholder="Search the site..."
        ></input>
        <button className="submit" onClick={this.handleSearch.bind(this)}>
          Search
        </button>
        <br></br>
        <div className={this.state.hide ? "show" : "hide"}>
          <h4>showing result for {this.state.author}</h4>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Score</th>
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

export default Seacrh;
