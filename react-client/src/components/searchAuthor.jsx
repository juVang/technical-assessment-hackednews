import React from 'react';
import $ from 'jquery';
class SearchAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searched: 0,
            searchResults: [],
            authorName: ""
        }
    }
    changeName(e) {
        this.setState({
            authorName: e.target.value
        })
    }
    searchStories() {
        var app = this;
        $.ajax({
            url: "/api/stories/searchStories",
            type: 'POST',
            data: { "query": $("#authorName").val() },
            dataType: 'json',
            success: function (data) {
                app.setState({
                    searched: 1,
                    searchResults: data
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    render() {
        var searchStoreis;
        var stories;
        if (this.state.searched) {
            searchStoreis = this.state.searchResults.map(story => {
                return (<tr key={story.id}>
                    <td>{story.title}</td>
                    <td>{story.score}</td>
                    <td>{story.descendants}</td>
                </tr>)
            });
            stories = (
                <div>
                    <p>serach Results for {this.state.authorName}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Points</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchStoreis}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <div>
                <label>
                    Author Name :<input type="text" id="authorName" name="authorName" onChange={this.changeName.bind(this)}></input>
                </label>
                <button id="searchBtn" onClick={this.searchStories.bind(this)}>Search</button>
                {stories}

            </div>

        );
    }
}

export default SearchAuthor;