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
                <td>{item.id.karma}</td>
              </tr>
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
