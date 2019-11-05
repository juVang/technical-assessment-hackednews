import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.

class TopTen extends React.Component  {
  constructor(props) {
      super(props);
      this.state={
        
     }
  };



  render() {
      return (<div>
        <table>
        <thead>
        <tr>
        <th>Title</th>
        <th>Author</th>
        </tr>
        </thead>
        <tbody>
         {
           //----------------its suppose to iterate data -----------
               this.props.allItems.map(function (item) {
            return <tr key={item.id}>
                  <td>{item.by.title}</td>
                  <td>{item.by.by}</td>
                </tr>
               })
          }
        </tbody>
        </table>
        </div> 
      );

      
  };
}
export default TopTen;