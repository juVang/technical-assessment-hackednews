import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const Author = (props) => (
  <div>
  <h1> Authors </h1>
  
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Karma</th>
        <th>About</th>
      </tr>
    </thead>
    <tbody>
    {props.authors.map(function(itm){
      return (
        <tr>
          <td>{itm.by}</td>
          <td>{itm.karma}</td>
          <td>{itm.about}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
</div>
);

export default Author;