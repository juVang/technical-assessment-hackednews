import React from "react";

class TopTen extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   var list = this.props.data;
  //   var rows = [];
  //   for (var i = 0; i < list.length; i++) {
  //     rows.push(
  //       <tr>
  //         <th>{item.Title}</th>
  //         <th>{item.Author}</th>
  //         <th>{item.Score}</th>
  //       </tr>
  //     );
  //   }
  //   console.log(rows, "hh");
  // }

  render() {
    //var rows = [];
    const rows = (
      <table>
        {this.props.data.map(function(item) {
          return (
            <tbody key={item.i}>
              <tr>
                <td>{item.title}</td>
                {/* <td>{item.by.id}</td> */}
                <td>{item.by.id}</td>
              </tr>
              {/* <tr>
                <td>{item.id}</td>
                <td>{item.score}</td>
                <td>{item.by.about}</td>
              </tr> */}
              {/* <tr>
                <td>Video Games Are Changing the Way Soccer Is Played</td>
                <td>mhb</td>
                <td>100</td>
              </tr> */}
            </tbody>
          );
        })}
      </table>
    );

    return (
      <div>
        <h1> Top Ten Stories </h1>

        <thead></thead>

        {rows}
      </div>
    );
  }
}
// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
// const TopTen = () => (
//   <div>
//     <h1> Top Ten Stories </h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Score</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Switch – New Video Game System [video]</td>
//           <td>ocdtrekkie</td>
//           <td>536</td>
//         </tr>
//         <tr>
//           <td>Video Games Are Changing the Way Soccer Is Played</td>
//           <td>mhb</td>
//           <td>100</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

export default TopTen;
