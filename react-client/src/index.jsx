import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import Author from './components/authors.jsx';
import Search from './components/search.jsx';

import $ from 'jquery';



// const App = (props) => <TopTen />;
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {stories: []};
        this.updateState = this.updateState.bind(this);
    }
    updateState(data) {
        this.setState({stories: data});
    }
    getStory(){
        var that = this;
        $.ajax({
            url: '/api/story',
            dataType: 'json',
            data: that.state.stories,
            success: function(data){
                that.updateState(data);
            },
            error: function(err){
                console.log("err", err);
            }
        });
    }
    getAuthor(){
        var that = this;
        $.ajax({
            url: '/api/author',
            dataType: 'json',
            data: that.state.stories,
            success: function(data){
                console.log(data);
                that.updateState(data);
            },
            error: function(err){
                console.log("err", err);
            }
        });
    }
    componentDidMount(){
        this.getStory();
     }
    render() {
        return (
            <div>
                <TopTen tens={this.state.stories}/>
                <Author authors={this.state.stories}/>
                <Search/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

