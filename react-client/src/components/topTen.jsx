import React from 'react';
//const data = require('../../dummy_data.js')


// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.


class TopTen extends React.Component {

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
            <td>{this.props.stories[0]['title']}</td>
            <td>{this.props.stories[0]['by']['id']}</td>
            <td>{this.props.stories[0]['score']}</td>
          </tr>
          <tr>
            <td>{this.props.stories[1]['title']}</td>
            <td>{this.props.stories[1]['by']['id']}</td>
            <td>{this.props.stories[1]['score']}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}
}




export default TopTen;