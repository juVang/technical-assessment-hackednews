import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topTenStories: []
        }

    }
    componentDidMount() {
        this.getStories();
    }
    getStories() {
        var app = this;
        $.ajax({
            url: "/api/stories",
            type: 'GET',
            success: function (data) {
                app.setState({
                    topTenStories: data
                })
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    render() {
        return <TopTen TenStoreis={this.state.topTenStories} />;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

