import React from 'react';
import ReactDOM from 'react-dom'


// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      score: '',
      about: '',
      id: '',
      karma: '',
      id: ''
    };

    this.titleChange = this.titleChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.scoreChange = this.scoreChange.bind(this);
  }



  titleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  authorChange(event) {
    this.setState({
      author: event.target.value
    });
  }


  scoreChange(event) {
    this.setState({
      score: event.target.value
    });
  }

  aboutChange(event) {
    this.setState({
      about: event.target.value
    })
  }

  idChange(event) {
    this.setState({
      id: event.target.value
    })
  }

  karmaChange(event) {
    this.setState({
      karma: event.target.value
    })
  }

  idChange(event) {
    this.setState({
      id: event.target.value
    })
  }

  // handleClick(data){
  //   this.setState({
  //     // this.props.handle(this.state)
  //   })
  // }

  handlePostClick(data) {
    var that = this;
    $.ajax({
      type: "POST",
      url: "/TopTen",
      data: that.props.data,
      success: function(data) {
        console.log("success");
        // error: function(data) {
        //   console.log("error");
        // }
          dataType: 'json'
      }

    })
  }



  render() {
    return (
      <form>
        <h1> author: </h1>
        <h2> by: </h2>
        <br />
        <label>
          about:
        <input
            name="about"
            type="string"
            onChange={this.aboutChange} />
        </label>
        <br />
        <label>
          id:
          <input
            name="id"
            type="string"
            onChange={this.idChange} />
        </label>
        <br />
        <label>
          karma:
        <input
            name="karma"
            type="number"
            onChange={this.karmaChange} />
        </label>
        <br />
        <label>
          id:
          <input
            name="id2"
            type="number"
            onChange={this.idChange} />
        </label>
        <br />
        <label>
          score:
          <input
            name="score"
            type="number"
            onChange={this.scoreChange} />
        </label>
        <br />
        <label>
          title:
          <input
            name="title"
            type="string"
            onChange={this.titleChange} />
        </label>
        <div>
          <h3> Top Ten Stories </h3>
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
                <td>Switch – New Video Game System [video]</td>
                <td>ocdtrekkie</td>
                <td>536</td>
              </tr>
              <tr>
                <td>Video Games Are Changing the Way Soccer Is Played</td>
                <td>mhb</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={this.handlePostClick.bind(this)}>post</button>
      </form >
    )
  }
}




ReactDOM.render(<TopTen />, document.getElementById('app'))
export default TopTen