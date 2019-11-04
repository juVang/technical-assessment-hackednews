import React from 'react';
import $ from 'jquery';
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      stories:[]
  }
  this.getdata= this.getdata.bind(this);
 // this.updateData = this.updateData.bind(this)
  this.handleClick = this.handleClick.bind(this);
  this.creatTable = this.creatTable.bind(this);
}
// updateData(newstories){
//   console.log(newstories,"data from update")
// this.setState({
// stories:newstories
// });
// }
handleClick() {
  this.getdata();
 
}
getdata(){
  var that = this;
  $.ajax({
      method:'GET',
      url:'http://localhost:8000/api/story',
      dataType:'json',
      success:function(data){

        that.setState({
          stories:data
          });
          that.creatTable(data)
          console.log("data in client-side", Array.isArray(data));
      },
      error: function(err){
          console.log("opps error",err)
      }
  });
  
 //this.updateData()
  event.preventDefault();
}
creatTable(storiesArr){
storiesArr.map(story =>(
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
        <td >{story['title']}</td>
        <td>{story['by']}</td>
        <td>{story.score}</td>
      </tr>
    </tbody>
  </table>
))
}
  render(){
    return(
  <div>
     <button onClick={this.handleClick}>TopTen</button>
  
</div>
);
}
}
export default TopTen;