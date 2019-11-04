import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopTenAuthors from './components/topTenAuthors.jsx';

import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: 0,
            topTenStories: [],
            topTenAuthors: []
        }

    }

    getStories() {
        var app = this;
        $.ajax({
            url: "/api/stories",
            type: 'GET',
            success: function (data) {
                app.setState({
                    component: 0,
                    topTenStories: data
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    getAuthors() {
        var app = this;
        $.ajax({
            url: "/api/stories/authors",
            type: 'GET',
            success: function (data) {
                app.setState({
                    component: 1,
                    topTenAuthors: data
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    render() {
        var currentComponent = <TopTen TenStoreis={this.getStories.bind(this)} data={this.state.topTenStories} />
        if (this.state.component === 1) {

            currentComponent = <TopTenAuthors data={this.state.topTenAuthors} TenAuthors={this.getAuthors.bind(this)} />
        }
        return (
            <div>
                <a href="#" onClick={this.getStories.bind(this)}><h1> Top Ten Stories </h1></a>
                <a href="#" onClick={this.getAuthors.bind(this)}><h1> Top Ten Authors </h1></a>
                {currentComponent}
            </div>
        );

    }
}

ReactDOM.render(<App />, document.getElementById('app'));

