import React from 'react';

class TopTenAuthors extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
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
      <tr > {this.props.top.map(item =>{
        <div>
          <td>{item.title}</td>
          <td>{item.by.id}</td>
          <td>{item.score}</td>
        </div>
      })}</tr>
    </tbody>
  </table>
</div>
) }
}
export default TopTenAuthors;