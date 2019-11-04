import React from "react";
class TopTenAuthers extends React.Component {
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
                <td>{item.by.id}</td>

                <td>{item.by.karma}</td>

                <td>{item.by.about}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );

    return (
      <div>
        <h1> Top Ten Authers </h1>
        <thead></thead>
        <tr>
          <th>name</th>
          <th>Karma</th>
          <th>About</th>
        </tr>

        {rows}
      </div>
    );
  }
}
export default TopTenAuthers;
