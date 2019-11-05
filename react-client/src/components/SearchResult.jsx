import React  from 'react';

export class SearchResult extends React.Component {
 constructor(props){
    super(props);
    this.state = {data:[]};
  }

  render() {
    return (
      <div>
        <h1> Top Ten Stories </h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Points</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.data.map((elem) => {
                return <TableRow param1= {elem.title} param2 ={elem.by.id} param3 ={elem.score} />
              })
              
            }
          </tbody>
        </table>
      </div>
    );
  }
}
