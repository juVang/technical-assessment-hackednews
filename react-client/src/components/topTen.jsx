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
      {/* <h1>{this.props.stories[0]['by']}</h1> */}
    </div>
    )
}
}

// const TopTen = (props) => (
//   <div>
//   <h1> Top Ten Stories </h1>
//   <table>
//     <thead>
//       <tr>
//         <th>Title</th>
//         <th>Author</th>
//         <th>Score</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Switch – New Video Game System [video]</td>
//         <td>ocdtrekkie</td>
//         <td>536</td>
//       </tr>
//       <tr>
//         <td>Video Games Are Changing the Way Soccer Is Played</td>
//         <td>mhb</td>
//         <td>100</td>
//       </tr>
//     </tbody>
//   </table>
//   <h1>{stories}</h1>
// </div>
// );



export default TopTen;