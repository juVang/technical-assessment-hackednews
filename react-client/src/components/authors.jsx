import React from 'react';
const Author = (props) => (
  <div>
  <h1> Authors </h1>
  <hr/>
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