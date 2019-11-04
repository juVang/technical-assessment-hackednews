import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.


class App extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          title : "" ,
          author: "" ,
          score: ""
      };

      // handelrefresh(){
      //     this.setState ({}) 
      // }
  }
}

//  render(){
//     // return ( )
//   }
// }
  // handleClick(){
      $.ajax({
        url:"/",
        type:"Get",
        success: function(){
          console.log('success')
        }

      })
  // }  
const TopTen = () => (
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
        {/* <td>{this.state.title}</td>
        <td>{this.state.author}</td>
        <td>{this.state.score}</td> */}
      </tr>
      <tr>
        <td>Video Games Are Changing the Way Soccer Is Played</td>
        <td>mhb</td>
        <td>100</td>
      </tr>
    </tbody>
  </table>
  {/* <button onClick={this.handleClick.bind(this)}></button> */}
</div>
);

export default TopTen;