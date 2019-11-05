import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component{
  constructor(props);
  super(props);
  // this.state{ term : ''}

  

  render(){ 
    return
  <div>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Score</th>s
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Switch – New Video Game System [video]</td>
        <td>ocdtrekkie</td>
        <td>536</td>
      </tr>
      <tr>
        <td>Video Games Are Changing the Way Soccer Is Played</td>
        <td>mhb</td>
        <td>100</td>
      </tr>
    </tbody>
  </table>
</div>


  
ReactDOM.render(TopTen , document.getElementById('app'));

export default TopTen;
  }}