import React from 'react';
import StoryModel from '../db/models/story.js';
var fakedata = require('.../dummy_data')

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends Component{
  constructor(props){
    super(props); 
    this.state={
    dat : []
    }
    $.ajax({
      url : '/',
      type:'POST',
      data: data,
      success:(err,result)=>{
        if(err){
          console.log("Err in sending data");
        }
        for(var i = 0; i<StoryModel.length; i++){

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
  <h1> Top Ten Stories </h1>
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
)
} 
}

ReactDOM.render(<TopTen/>,document.getElementById('app'))
export default TopTen;