import React from 'react';
//const data = require('../../dummy_data.js')


// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.


class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stories: []
    };
};


componentDidMount() {
  fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          stories: result
        });
      },


      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}


render() {
  const { error, isLoaded, stories } = this.state;
  var keys = Object.keys(stories)
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {keys.map(story => (
          <li >
            {story}
          </li>
        ))}
      </ul>
    );
  }
}
}







// class TopTen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         img: ''
//     };
// };

//   render() {
//     return (
//       <div>
//       <h1> Top Ten Stories </h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{this.props.stories[0]['title']}</td>
//             <td>{this.props.stories[0]['by']['id']}</td>
//             <td>{this.props.stories[0]['score']}</td>
//           </tr>
//           <tr>
//             <td>{this.props.stories[1]['title']}</td>
//             <td>{this.props.stories[1]['by']['id']}</td>
//             <td>{this.props.stories[1]['score']}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     )
// }
// }





export default TopTen;