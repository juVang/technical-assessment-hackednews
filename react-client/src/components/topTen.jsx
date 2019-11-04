import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
var TopTen = (props) => {
  function whenclicked(id) {
    alert('clicked')
    props.whenItemClicked(id);
  }
  props.TenStoreis();

  var storeis = props.data.map(story => {
    return (<tr key={story.id} >
      <td >{story.title}</td>
      <td>{story.by.id}</td>
      <td>{story.score}</td>
    </tr>)
  });
  return (
    <div>

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