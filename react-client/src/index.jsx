import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopTenAuthors from './components/topTenAuthors.jsx';
import SearchAuthor from './components/searchAuthor.jsx';
import RecommendeStories from './components/recommendeStories.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: 0,
            topTenStories: [],
            topTenAuthors: [],
            showRecommened: 0,
            recommended: [],
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
    getRecommeded(id) {

        var app = this;
        $.ajax({
            url: "/api/stories/recommeded",
            type: 'POST',
            data: { "id": id },
            dataType: 'json',
            success: function (data) {
                app.setState({
                    showRecommened: 0,
                    recommended: data
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Top Ten Stroies</Link>
                            </li>
                            <li>
                                <Link to="/authors">Top Ten Authors</Link>
                            </li>
                            <li>
                                <Link to="/searchAuthors">Search Authors</Link>
                            </li>
                            <li>
                                <Link to="/recommended">Recommeded Stroeis</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <TopTen whenItemClicked={this.getRecommeded.bind(this)} TenStoreis={this.getStories.bind(this)} data={this.state.topTenStories} />
                        </Route>
                        <Route exact path="/authors">
                            <TopTenAuthors data={this.state.topTenAuthors} TenAuthors={this.getAuthors.bind(this)} />
                        </Route>
                        <Route exact path="/searchAuthors">
                            <SearchAuthor />
                        </Route>
                        <Route exact path="/recommended">
                            <RecommendeStories data={this.state.recommended} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

