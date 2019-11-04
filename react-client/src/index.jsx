import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopTenAuthors from './components/topTenAuthors.jsx';
import SearchAuthor from './components/searchAuthor.jsx';
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
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <TopTen TenStoreis={this.getStories.bind(this)} data={this.state.topTenStories} />
                        </Route>
                        <Route exact path="/authors">
                            <TopTenAuthors data={this.state.topTenAuthors} TenAuthors={this.getAuthors.bind(this)} />
                        </Route>
                        <Route exact path="/searchAuthors">
                            <SearchAuthor />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
        // var currentComponent = <TopTen TenStoreis={this.getStories.bind(this)} data={this.state.topTenStories} />
        // if (this.state.component === 1) {

        //     currentComponent = <TopTenAuthors data={this.state.topTenAuthors} TenAuthors={this.getAuthors.bind(this)} />
        // }
        // return (
        //     <div>
        //         <a href="#" onClick={this.getStories.bind(this)}><h1> Top Ten Stories </h1></a>
        //         <a href="#" onClick={this.getAuthors.bind(this)}><h1> Top Ten Authors </h1></a>
        //         {currentComponent}
        //     </div>
        // );

    }
}

ReactDOM.render(<App />, document.getElementById('app'));

