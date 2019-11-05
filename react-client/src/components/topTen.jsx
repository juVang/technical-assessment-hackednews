import React from 'react';
// const entries = require('../../dummy_data');
// console.log(entries);
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
              </tr>
            </thead>
            <tbody>
              {this.props.entries.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.title}</td>
                  <td>{entry.by.id}</td>                  
                </tr>
              ))}  
            </tbody>
          </table>
      </div>
    )
  }
}

export default TopTen