import React from 'react';
import StoryModel from '../db/models/story.js';
var fakedata = require('.../dummy_data')

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTenAuther extends Component{
  constructor(props){
    super(props); 
    this.state={
    dat = [],
    }
    $.ajax({
      url : '/',
      type:'POST',
      data: data,
      success:(err,result)=>{
        if(err){
          console.log("Err in sending data");
        }
        console.log("Done!")

      }

    })
  }
  handelTen(){
    this.setState ({dat : dat})
  }

  

render(){
return(
  <div>
  <h1> Top Ten Authors </h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Karma</th>
        <th>About</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
)
} 
}

ReactDOM.render(<TopTenAuther/>,document.getElementById('app'))
export default TopTen;