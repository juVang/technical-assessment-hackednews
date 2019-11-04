import React from "react";
class TopTenStories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = (
      <table>
        {this.props.data.map(function(item) {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.title}</td>
                <td>{item.by.id}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );

    return (
      <div>
        <h1> Top Ten Stories </h1>
        <thead> </thead>
        <tr>
          <th>Title</th>
          <th>Auther</th>
        </tr>

        {rows}
      </div>
    );
  }
}
export default TopTenStories;
