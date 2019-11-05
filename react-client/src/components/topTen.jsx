import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.

class Rows extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

      return (
        <tr>
          <th>{this.props.story.title}</th>
          <th>{this.props.story.by}</th>
          <th>{this.props.story.score}</th>
        </tr>
      )
    }
    
  
};

class TopTen extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   title: 'tttt',
    //   author: 'Taz',
    //   score: '100'
    // }
  }

  render() {

    return (

      <div>
        <h1> Top Ten Stories </h1>
        <table className = "tbl">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stories.map(story , index =>
              <Rows key= {index} story = {story}></Rows>
            )}
          
          </tbody>
        </table>
    </div>
  )
  }
};

export default TopTen;