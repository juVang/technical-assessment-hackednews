import React from "react";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.

class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      by: "",
      title: "",
      score: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //get storys authors "title"
  handleSubmit(event) {
    alert("A name was submitted:");
    event.preventDefault();
  }
  //   console.log("data");
  // fetch(
  //   `https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty`
  //   //`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  // )
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("data");
  //     return response;
  //   });
  // }
  //get storys authors "by"

  //let repo = await this.getUserRepo(this.refs.username.value);

  // this.setState({ name: repo.name,
  // description: repo.description,
  // git_url: repo.git_url,
  // stargazers_count: repo.stargazers_count,
  // forks_count: repo.forks_count,
  // open_issues_count: repo.open_issues_count,
  // size: repo.size,

  //  })

  render() {
    return (
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
            <tr>
              <td>Switch – New Video Game System [video]</td>
              <td>ocdtrekkie</td>
              <td>536</td>
            </tr>
            <tr>
              <td>Video Games Are Changing the Way Soccer Is Played</td>
              <td>mhb</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TopTen;
