import React, { Component } from "react";
import dummyData from "../../dummy_data.js";
import axios from "axios";

export default class TopTen extends Component {
  constructor(props) {
    super(props);
    this.getTopStoriesUserData = this.getTopStoriesUserData.bind();

    // this.state = { dummyData };
    let stories = [];
    this.state = { stories };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/story")
      .then(res => {
        console.log("success get axios");
        var result = JSON.parse(res.data);
        // sortArrayOfObjects = (arr, key) => {
        //   return arr.sort((a, b) => {
        //     return a[key] - b[key];
        //   });
        // };
        // sortArrayOfObjects(result, "score");

        this.setState({ stories: result });
      })
      .catch(err => console.log("axios get error: " + err));

    /*
    // This Code to get the data from API
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => {
        let topStoriesId = [...res.data];
        var Func =
          (this.getTopStoriesUserData(topStoriesId),
          () => {
            console.log("DONE");
          });
        console.log("Sucess 500 ids");
      })
      .catch(err => console.log("axios get error: " + err));
      */
  }

  // This function to bring User data after we got the ids from api
  getTopStoriesUserData(topStoriesId) {
    let users = [];
    topStoriesId.map((id, i) => {
      axios
        .get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
        .then(res => {
          users.push({
            by: res.data.by,
            id: res.data.id,
            title: res.data.title,
            score: res.data.score
          });
          console.log(users);
        })
        .catch(err => console.log("Errore from line 43: " + err));
    });
    // var that = this;
    // setTimeout(function() {
    //   console.log(users);
    //   that.setState({ stories: users });
    // }, 10000);
    return true;
  }

  render() {
    return (
      <div>
        <h1> There is {this.state.stories.length} story </h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stories.map((story, i) => (
              <tr key={i}>
                <td>{story.title}</td>
                <td>{story.by}</td>
                <td>{story.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
