import React from 'react';
import $ from 'jquery';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor () {
    super();
    this.state = {
      data: []
    }
    // this.repeatedData = this.repeatedData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.mapping = this.mapping.bind(this);
    this.saveData = this.saveData.bind(this);

  }


  mapping() {
    // fetchData()
    this.state.data.map((story) => {
      var i;
      return (
          <tr key ={story.id}>
            <td>{this.story[i]['title']}</td>
            <td>{this.story[i]['id']}</td>
            <td>{this.story[i]['score']}</td>
          </tr>
      ) 
    })
  }
  
  updateDate(data) {
      this.setState({
      data:data
    })
  }
  
  saveData(){
      $.ajax({
      url: '/',
      type:'POST',
      success: console.log("it's saved"),
      dataType: "json"
      });
    fetchData();
   } 
  
  fetchData() {
    var that = this;
    $.ajax({
    url: '/',
    type:'GET',
    success: that.updateData(data),
   
            // that.updateData(data),
    dataType: "json"
    });
    console.log(data)
  }

render() {
    return (
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
            <th>Unfortunatly, there is NO top stories because it's NOT RENDERED </th>
           {this.mapping()}
           {/* the function chosen is wrong, I know  */}
          </tr>
        </tbody>
      </table>
    </div>
)}
}

export default TopTen;