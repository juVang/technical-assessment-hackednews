import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
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
    componentDidMount(){
        var that = this;
        $.ajax({
            url: '/api/story',
            dataType: 'json',
            data: that.state.stories,
            success: function(data){
                console.log(data);
                that.updateState(data);
                console.log(that.state.stories);
            },
            error: function(err){
                console.log("err", err);
            }
        });
     }
    render() {
        return (
            <div>
                <TopTen tens={this.state.stories}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

