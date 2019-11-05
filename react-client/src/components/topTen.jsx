import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopTen = (props) => (
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
    {props.tens.map(function(itm){
      return (
        
        <tr>
          <td>{itm.title}</td>
          <td>{itm.by}</td>
          <td>{itm.score}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
</div>
);

export default TopTen;