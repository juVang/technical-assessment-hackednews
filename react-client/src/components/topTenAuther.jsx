import React from 'react';
// import StoryModel from '../db/models/story.js';
// var fakedata = require('.../dummy_data')

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTenAuther extends Component{
  constructor(props){
    super(props); 
    this.state={
    dat = [],
    }
  }
  handelTopTen(){
    this.setState ({dat : dat})
  }
render(){
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
} 
}
//NOT WORKING
ReactDOM.render(<TopTenAuther/>,document.getElementById('app'))
export default TopTen;