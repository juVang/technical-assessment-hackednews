import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopTen = (props) => {
  var storeis = props.TenStoreis.map(story => {
    return (<tr key={story.id}>
      <td>{story.title}</td>
      <td>{story.by}</td>
      <td>{story.score}</td>
    </tr>)
  });
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
          {storeis}
        </tbody>
      </table>
    </div>
  );
}

export default TopTen;