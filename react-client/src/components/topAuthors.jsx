import React from "react";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
const TopAuthors = props => (
  <div>
    <h1> Top Ten Authors </h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Karma</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        {props.data1.map((e, i) => {
          console.log(e);
          return (
            <tr key={i}>
              <td>{e.by}</td>
              <td>{e.karma}</td>
              <td>{e.about}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <hr></hr>
  </div>
);

export default TopAuthors;
