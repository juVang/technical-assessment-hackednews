import React from 'react';
// import { prependOnceListener } from 'cluster';
// import { PromiseProvider } from 'mongoose';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopTen = () => (
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
      {props.stories.length > 0 ? (
        props.stories.map(story => (
          <tr>
        <td>Switch – New Video Game System [video]</td>
        <td>ocdtrekkie</td>
        <td>536</td>
      </tr>
        ))
      ) : (
        <tr>
        <td>Video Games Are Changing the Way Soccer Is Played</td>
        <td>mhb</td>
        <td>100</td>
      </tr>
      )}
      
     
    </tbody>
  </table>
</div>
);
export default TopTen;