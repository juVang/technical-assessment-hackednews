import React from 'react';

class TopTen extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.


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
      <tr> {this.props.top.map((item,i) =>{
        <div>
          <td key={i}>{item.title}</td>
          <td key={i}>{item.by}</td>
          <td key={i}>{item.score}</td>
        </div>
      })}</tr>
    </tbody>
  </table>
</div>
) }
}
export default TopTen;