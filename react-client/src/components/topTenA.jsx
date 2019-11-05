import React from 'react';

class TopTenA extends React.Component  {
    constructor(props) {
        super(props);
        
    };
    render() {
        return (<div>
          
         
          <table>
          <thead>
        <tr>
          <th>Name</th>
          <th>Karma</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
          {/* {
            
                 this.props.allItems.map(function (item) {
          return <tr key={item.id}>
                    <td>{item.by.title}</td>
                    <td>{item.by.by}</td>
                  </tr>
                 })
              } */}
        </tbody>
           </table>
        </div>);
  
        
    };
  }
  export default TopTenA;